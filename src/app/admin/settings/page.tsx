"use client";

import { useSession } from "@/components/providers/SessionProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Crown, Settings, Save, Database, Mail, Globe, Shield, Bell, Palette, Server, Key, Monitor } from "lucide-react";

interface SystemSettings {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  contactEmail: string;
  supportEmail: string;
  maintenanceMode: boolean;
  registrationEnabled: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  analyticsEnabled: boolean;
  cacheEnabled: boolean;
  debugMode: boolean;
  maxFileSize: number;
  allowedFileTypes: string[];
  sessionTimeout: number;
  passwordMinLength: number;
  requireEmailVerification: boolean;
  twoFactorEnabled: boolean;
}

export default function SystemSettings() {
  const { user, status } = useSession();
  const router = useRouter();
  const [settings, setSettings] = useState<SystemSettings>({
    siteName: "Aptor Studies",
    siteDescription: "Premium education portal providing elite university guidance",
    siteUrl: "https://aptorstudies.com",
    contactEmail: "info@aptorstudies.com",
    supportEmail: "info@aptorstudies.com",
    maintenanceMode: false,
    registrationEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    analyticsEnabled: true,
    cacheEnabled: true,
    debugMode: false,
    maxFileSize: 10,
    allowedFileTypes: ["jpg", "jpeg", "png", "pdf", "doc", "docx"],
    sessionTimeout: 7,
    passwordMinLength: 8,
    requireEmailVerification: true,
    twoFactorEnabled: false
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  useEffect(() => {
    if (status === "loading") return;
    
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (user?.role !== "admin") {
      router.push("/admin");
      return;
    }

    // Simulate loading settings
    setTimeout(() => setLoading(false), 1000);
  }, [status, user, router]);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (key: keyof SystemSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const tabs = [
    { id: "general", label: "General", icon: Globe },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "system", label: "System", icon: Server },
  ];

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center mobile-safe-area">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black mobile-safe-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4">
            <Settings className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">SYSTEM SETTINGS</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                System <span className="gradient-text">Settings</span>
              </h1>
              <p className="text-gray-400">Configure system-wide settings and preferences</p>
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="btn-premium inline-flex items-center gap-2 text-black font-semibold disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <div className="card-premium p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="card-premium p-8">
              {/* General Settings */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">General Settings</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Site Name</label>
                      <input
                        type="text"
                        value={settings.siteName}
                        onChange={(e) => updateSetting("siteName", e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Site URL</label>
                      <input
                        type="url"
                        value={settings.siteUrl}
                        onChange={(e) => updateSetting("siteUrl", e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Site Description</label>
                    <textarea
                      value={settings.siteDescription}
                      onChange={(e) => updateSetting("siteDescription", e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Contact Email</label>
                      <input
                        type="email"
                        value={settings.contactEmail}
                        onChange={(e) => updateSetting("contactEmail", e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Support Email</label>
                      <input
                        type="email"
                        value={settings.supportEmail}
                        onChange={(e) => updateSetting("supportEmail", e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-400/5 rounded-lg border border-yellow-400/20">
                    <div>
                      <h3 className="text-white font-medium">Maintenance Mode</h3>
                      <p className="text-gray-400 text-sm">Temporarily disable site access for maintenance</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.maintenanceMode}
                        onChange={(e) => updateSetting("maintenanceMode", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-400/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                    </label>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Password Min Length</label>
                      <input
                        type="number"
                        min="6"
                        max="32"
                        value={settings.passwordMinLength}
                        onChange={(e) => updateSetting("passwordMinLength", parseInt(e.target.value))}
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Session Timeout (days)</label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={settings.sessionTimeout}
                        onChange={(e) => updateSetting("sessionTimeout", parseInt(e.target.value))}
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { key: "registrationEnabled", title: "User Registration", desc: "Allow new users to register accounts" },
                      { key: "requireEmailVerification", title: "Email Verification", desc: "Require email verification for new accounts" },
                      { key: "twoFactorEnabled", title: "Two-Factor Authentication", desc: "Enable 2FA for enhanced security" },
                    ].map((setting) => (
                      <div key={setting.key} className="flex items-center justify-between p-4 bg-yellow-400/5 rounded-lg border border-yellow-400/20">
                        <div>
                          <h3 className="text-white font-medium">{setting.title}</h3>
                          <p className="text-gray-400 text-sm">{setting.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings[setting.key as keyof SystemSettings] as boolean}
                            onChange={(e) => updateSetting(setting.key as keyof SystemSettings, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-400/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Notification Settings</h2>
                  
                  <div className="space-y-4">
                    {[
                      { key: "emailNotifications", title: "Email Notifications", desc: "Send notifications via email" },
                      { key: "smsNotifications", title: "SMS Notifications", desc: "Send notifications via SMS" },
                    ].map((setting) => (
                      <div key={setting.key} className="flex items-center justify-between p-4 bg-yellow-400/5 rounded-lg border border-yellow-400/20">
                        <div>
                          <h3 className="text-white font-medium">{setting.title}</h3>
                          <p className="text-gray-400 text-sm">{setting.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings[setting.key as keyof SystemSettings] as boolean}
                            onChange={(e) => updateSetting(setting.key as keyof SystemSettings, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-400/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Settings */}
              {activeTab === "system" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">System Settings</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Max File Size (MB)</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={settings.maxFileSize}
                      onChange={(e) => updateSetting("maxFileSize", parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Allowed File Types</label>
                    <input
                      type="text"
                      value={settings.allowedFileTypes.join(", ")}
                      onChange={(e) => updateSetting("allowedFileTypes", e.target.value.split(", "))}
                      placeholder="jpg, png, pdf, doc"
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div className="space-y-4">
                    {[
                      { key: "analyticsEnabled", title: "Analytics", desc: "Enable website analytics tracking" },
                      { key: "cacheEnabled", title: "Caching", desc: "Enable system caching for better performance" },
                      { key: "debugMode", title: "Debug Mode", desc: "Enable debug mode (development only)" },
                    ].map((setting) => (
                      <div key={setting.key} className="flex items-center justify-between p-4 bg-yellow-400/5 rounded-lg border border-yellow-400/20">
                        <div>
                          <h3 className="text-white font-medium">{setting.title}</h3>
                          <p className="text-gray-400 text-sm">{setting.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings[setting.key as keyof SystemSettings] as boolean}
                            onChange={(e) => updateSetting(setting.key as keyof SystemSettings, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-400/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}