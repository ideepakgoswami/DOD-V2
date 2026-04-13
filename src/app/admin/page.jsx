"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Users, Save, Check, LogIn } from 'lucide-react';
import Image from 'next/image';

const ICONS = ["Trophy", "Lightbulb", "Users"];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [events, setEvents] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/events')
        .then(res => res.json())
        .then(data => setEvents(data))
        .catch(err => console.error(err));
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. (Hint: admin123)');
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(events)
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (e) {
      alert("Failed to save changes.");
    }
    setSaving(false);
  };

  const handleEventChange = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index][field] = value;
    setEvents(newEvents);
  };

  const handleImageUpload = async (index, file) => {
    if (!file) return;
    const newEvents = [...events];
    const oldImage = newEvents[index].image;
    newEvents[index].image = "";
    setEvents(newEvents);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        handleEventChange(index, 'image', data.url);
      } else {
        alert("Upload failed: " + data.error);
        handleEventChange(index, 'image', oldImage);
      }
    } catch (e) {
      alert("Upload failed.");
      handleEventChange(index, 'image', oldImage);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center font-montserrat p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111] p-8 rounded-2xl border border-gold/20 shadow-2xl max-w-sm w-full"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
              <LogIn className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h1 className="text-2xl text-center text-white font-cinzel mb-8">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold/70 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter password"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gold text-charcoal font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-white transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal font-montserrat p-6 md:p-12 pt-24 md:pt-32 pb-32">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-white/10 pb-6 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl text-white font-cinzel text-glow text-gold-gradient">
              Events Dashboard
            </h1>
            <p className="text-ivory/60 mt-2 font-light">
              Manage the 3 upcoming events displayed on the homepage. Changes save instantly.
            </p>
          </div>
          
          <button
            onClick={handleSave}
            disabled={saving}
            className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm transition-all shadow-lg
              ${saved ? 'bg-green-500 text-white' : 'bg-gold text-charcoal hover:bg-white'} 
              ${saving ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {saved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
            <span>{saving ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'}</span>
          </button>
        </header>

        {events.length === 0 ? (
          <div className="text-center text-white/50 py-20">Loading events data...</div>
        ) : (
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111] border border-white/10 p-6 md:p-8 rounded-2xl grid md:grid-cols-[1fr_2fr] gap-8"
              >
                {/* Visual Preview Side */}
                <div className="space-y-4">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50">
                    {event.image ? (
                      <img 
                        src={event.image} 
                        alt="Preview" 
                        className="w-full h-full object-cover opacity-80"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">No Image URL</div>
                    )}
                    <div className="absolute top-3 left-3 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Card {index + 1}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold/70 mb-2">Image Setup</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={event.image}
                        onChange={(e) => handleEventChange(index, 'image', e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-gold"
                        placeholder="Path or URL"
                      />
                      <label className="bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 rounded-lg px-4 py-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer flex items-center justify-center whitespace-nowrap transition-colors">
                        Upload
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleImageUpload(index, e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gold/70 mb-2">Badge / Type</label>
                      <input 
                        type="text" 
                        value={event.type}
                        onChange={(e) => handleEventChange(index, 'type', e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gold/70 mb-2">Date String</label>
                      <input 
                        type="text" 
                        value={event.date}
                        onChange={(e) => handleEventChange(index, 'date', e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold/70 mb-2">Main Title</label>
                    <input 
                      type="text" 
                      value={event.title}
                      onChange={(e) => handleEventChange(index, 'title', e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-cinzel text-xl focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold/70 mb-2">Description</label>
                    <textarea 
                      value={event.description}
                      onChange={(e) => handleEventChange(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white/80 text-sm focus:outline-none focus:border-gold resize-none"
                    />
                  </div>

                  <div>
                     <label className="block text-[10px] uppercase tracking-widest text-gold/70 mb-2">Icon Selection</label>
                     <select 
                        value={event.icon} 
                        onChange={(e) => handleEventChange(index, 'icon', e.target.value)}
                        className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-gold w-48"
                      >
                        {ICONS.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                     </select>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
