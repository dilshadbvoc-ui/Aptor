"use client";

import { useState, useEffect } from "react";
import { 
  Search, 
  Globe, 
  Share2, 
  BarChart3, 
  Settings, 
  Save,
  Plus,
  Trash2
} from "lucide-react";

interface SeoSettings {
  _id?: string;
  siteName: string;
  siteDescription: string;
  siteKeywords: string[];
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  ogImage: string;
  ogImageWidth: number;
  ogImageHeight: number;
  twitterHandle: string;
  twitterCard: string;
  contactEmail: string;
  contactPhone: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  googleAnalyticsId: string;
  googleSiteVerification: string;
  facebookPixelId: string;
  yandexVerification: string;
  yahooVerification: string;
  robotsSettings: {
    index: boolean;
    follow: boolean;
    maxImagePreview: string;
    maxVideoPreview: number;
    maxSnippet: number;
  };
  customMetaTags: Array<{
    name: string;
    content: string;
    property: string;
  }>;
  organizationSchema: {
    enabled: boolean;
    name: string;
    description: string;
    logo: string;
  };
  sitemapSettings: {
    enabled: boolean;
    changeFreq: {
      homepage: string;
      universities: string;
      blogs: string;
      static: string;
    };
    priority: {
      homepage: number;
      universities: number;
      blogs: number;
      static: number;
    };
  };
  pageOverrides: Array<{
    path: string;
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    noIndex: boolean;
    noFollow: boolean;
  }>;
}

export default function AdminSeoPage() {
  const [settings, setSettings] = useState<SeoSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/admin/seo");
      if (response.ok) {
        const data = await response.json();
        setSettings(data);
      }
    } catch (error) {
      console.error("Error fetching SEO settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!settings) return;
    
    setSaving(true);
    try {
      const response = await fetch("/api/admin/seo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setMessage("SEO settings saved successfully!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Error saving settings");
      }
    } catch (error) {
      console.error("Error saving SEO settings:", error);
      setMessage("Error saving settings");
    } finally {
      setSaving(false);
    }
  };

  const updateSettings = (path: string, value: any) => {
    if (!settings) return;
    
    const keys = path.split('.');
    const newSettings = { ...settings };
    let current: any = newSettings;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setSettings(newSettings);
  };

  const addCustomMetaTag = () => {
    if (!settings) return;
    setSettings({
      ...settings,
      customMetaTags: [...settings.customMetaTags, { name: "", content: "", property: "" }]
    });
  };

  const removeCustomMetaTag = (index: number) => {
    if (!settings) return;
    const newTags = settings.customMetaTags.filter((_, i) => i !== index);
    setSettings({ ...settings, customMetaTags: newTags });
  };

  const addPageOverride = () => {
    if (!settings) return;
    setSettings({
      ...settings,
      pageOverrides: [...settings.pageOverrides, {
        path: "",
        title: "",
        description: "",
        keywords: [],
        ogImage: "",
        noIndex: false,
        noFollow: false
      }]
    });
  };

  const removePageOverride = (index: number) => {
    if (!settings) return;
    const newOverrides = settings.pageOverrides.filter((_, i) => i !== index);
    setSettings({ ...settings, pageOverrides: newOverrides });
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error Loading SEO Settings</h1>
          <button 
            onClick={fetchSettings}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "social", label: "Social Media", icon: Share2 },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "technical", label: "Technical", icon: Search },
    { id: "pages", label: "Page Overrides", icon: Globe },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">SEO Settings</h1>
            <p className="text-gray-300 mt-2">
              Manage all SEO optimizations for your website from one place.
            </p>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 transition-colors"
          >
            <Save className="w-5 h-5 mr-2" />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
        
        {message && (
          <div className={`mt-4 p-4 rounded-lg border ${
            message.includes("Error") 
              ? "bg-red-900/50 text-red-300 border-red-700" 
              : "bg-green-900/50 text-green-300 border-green-700"
          }`}>
            {message}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700 mb-8">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-teal-500 text-teal-400"
                  : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* General Settings */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    value={settings.siteName}
                    onChange={(e) => updateSettings("siteName", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Site URL
                  </label>
                  <input
                    type="url"
                    value={settings.siteUrl}
                    onChange={(e) => updateSettings("siteUrl", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Site Description
                  </label>
                  <textarea
                    value={settings.siteDescription}
                    onChange={(e) => updateSettings("siteDescription", e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Default Title
                  </label>
                  <input
                    type="text"
                    value={settings.defaultTitle}
                    onChange={(e) => updateSettings("defaultTitle", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title Template
                  </label>
                  <input
                    type="text"
                    value={settings.titleTemplate}
                    onChange={(e) => updateSettings("titleTemplate", e.target.value)}
                    placeholder="%s | Site Name"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Keywords (comma separated)
                  </label>
                  <input
                    type="text"
                    value={settings.siteKeywords.join(", ")}
                    onChange={(e) => updateSettings("siteKeywords", e.target.value.split(",").map(k => k.trim()))}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => updateSettings("contactEmail", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={settings.contactPhone}
                    onChange={(e) => updateSettings("contactPhone", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={settings.address.locality}
                    onChange={(e) => updateSettings("address.locality", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    State/Region
                  </label>
                  <input
                    type="text"
                    value={settings.address.region}
                    onChange={(e) => updateSettings("address.region", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Media Settings */}
        {activeTab === "social" && (
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Open Graph Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    OG Image URL
                  </label>
                  <input
                    type="text"
                    value={settings.ogImage}
                    onChange={(e) => updateSettings("ogImage", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Twitter Handle
                  </label>
                  <input
                    type="text"
                    value={settings.twitterHandle}
                    onChange={(e) => updateSettings("twitterHandle", e.target.value)}
                    placeholder="@username"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Social Media Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(settings.socialMedia).map(([platform, url]) => (
                  <div key={platform}>
                    <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">
                      {platform}
                    </label>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => updateSettings(`socialMedia.${platform}`, e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Settings */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Analytics & Tracking</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Google Analytics ID
                  </label>
                  <input
                    type="text"
                    value={settings.googleAnalyticsId}
                    onChange={(e) => updateSettings("googleAnalyticsId", e.target.value)}
                    placeholder="G-XXXXXXXXXX"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Facebook Pixel ID
                  </label>
                  <input
                    type="text"
                    value={settings.facebookPixelId}
                    onChange={(e) => updateSettings("facebookPixelId", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Site Verification</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Google Site Verification
                  </label>
                  <input
                    type="text"
                    value={settings.googleSiteVerification}
                    onChange={(e) => updateSettings("googleSiteVerification", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Yandex Verification
                  </label>
                  <input
                    type="text"
                    value={settings.yandexVerification}
                    onChange={(e) => updateSettings("yandexVerification", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technical Settings */}
        {activeTab === "technical" && (
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Robots & Crawling</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="robotsIndex"
                    checked={settings.robotsSettings.index}
                    onChange={(e) => updateSettings("robotsSettings.index", e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-600 bg-gray-700 rounded"
                  />
                  <label htmlFor="robotsIndex" className="ml-2 block text-sm text-gray-300">
                    Allow search engines to index this site
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="robotsFollow"
                    checked={settings.robotsSettings.follow}
                    onChange={(e) => updateSettings("robotsSettings.follow", e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-600 bg-gray-700 rounded"
                  />
                  <label htmlFor="robotsFollow" className="ml-2 block text-sm text-gray-300">
                    Allow search engines to follow links
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Schema.org Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="schemaEnabled"
                    checked={settings.organizationSchema.enabled}
                    onChange={(e) => updateSettings("organizationSchema.enabled", e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-600 bg-gray-700 rounded"
                  />
                  <label htmlFor="schemaEnabled" className="ml-2 block text-sm text-gray-300">
                    Enable Organization Schema
                  </label>
                </div>
                
                {settings.organizationSchema.enabled && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        value={settings.organizationSchema.name}
                        onChange={(e) => updateSettings("organizationSchema.name", e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Logo URL
                      </label>
                      <input
                        type="text"
                        value={settings.organizationSchema.logo}
                        onChange={(e) => updateSettings("organizationSchema.logo", e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Custom Meta Tags</h2>
              <div className="space-y-4">
                {settings.customMetaTags.map((tag, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder="Name/Property"
                      value={tag.name || tag.property}
                      onChange={(e) => {
                        const newTags = [...settings.customMetaTags];
                        if (e.target.value.startsWith('og:')) {
                          newTags[index] = { ...tag, property: e.target.value, name: '' };
                        } else {
                          newTags[index] = { ...tag, name: e.target.value, property: '' };
                        }
                        setSettings({ ...settings, customMetaTags: newTags });
                      }}
                      className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Content"
                      value={tag.content}
                      onChange={(e) => {
                        const newTags = [...settings.customMetaTags];
                        newTags[index] = { ...tag, content: e.target.value };
                        setSettings({ ...settings, customMetaTags: newTags });
                      }}
                      className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
                    />
                    <button
                      onClick={() => removeCustomMetaTag(index)}
                      className="p-2 text-red-400 hover:bg-red-900/50 rounded-lg border border-transparent hover:border-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                
                <button
                  onClick={addCustomMetaTag}
                  className="flex items-center px-4 py-2 text-teal-400 border border-teal-600 rounded-lg hover:bg-teal-900/50 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Custom Meta Tag
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Page Overrides */}
        {activeTab === "pages" && (
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Page-Specific SEO Overrides</h2>
                <button
                  onClick={addPageOverride}
                  className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Page Override
                </button>
              </div>
              
              <div className="space-y-6">
                {settings.pageOverrides.map((override, index) => (
                  <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-white">Page Override #{index + 1}</h3>
                      <button
                        onClick={() => removePageOverride(index)}
                        className="p-1 text-red-400 hover:bg-red-900/50 rounded border border-transparent hover:border-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Page Path
                        </label>
                        <input
                          type="text"
                          placeholder="/about"
                          value={override.path}
                          onChange={(e) => {
                            const newOverrides = [...settings.pageOverrides];
                            newOverrides[index] = { ...override, path: e.target.value };
                            setSettings({ ...settings, pageOverrides: newOverrides });
                          }}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Custom Title
                        </label>
                        <input
                          type="text"
                          value={override.title}
                          onChange={(e) => {
                            const newOverrides = [...settings.pageOverrides];
                            newOverrides[index] = { ...override, title: e.target.value };
                            setSettings({ ...settings, pageOverrides: newOverrides });
                          }}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Custom Description
                        </label>
                        <textarea
                          value={override.description}
                          onChange={(e) => {
                            const newOverrides = [...settings.pageOverrides];
                            newOverrides[index] = { ...override, description: e.target.value };
                            setSettings({ ...settings, pageOverrides: newOverrides });
                          }}
                          rows={2}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`noIndex-${index}`}
                            checked={override.noIndex}
                            onChange={(e) => {
                              const newOverrides = [...settings.pageOverrides];
                              newOverrides[index] = { ...override, noIndex: e.target.checked };
                              setSettings({ ...settings, pageOverrides: newOverrides });
                            }}
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-500 bg-gray-600 rounded"
                          />
                          <label htmlFor={`noIndex-${index}`} className="ml-2 block text-sm text-gray-300">
                            No Index
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`noFollow-${index}`}
                            checked={override.noFollow}
                            onChange={(e) => {
                              const newOverrides = [...settings.pageOverrides];
                              newOverrides[index] = { ...override, noFollow: e.target.checked };
                              setSettings({ ...settings, pageOverrides: newOverrides });
                            }}
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-500 bg-gray-600 rounded"
                          />
                          <label htmlFor={`noFollow-${index}`} className="ml-2 block text-sm text-gray-300">
                            No Follow
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {settings.pageOverrides.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    No page overrides configured. Add one to customize SEO for specific pages.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}