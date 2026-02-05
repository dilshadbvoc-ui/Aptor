"use client";

import { Mail, Eye, Trash2, Crown, Phone, User, Calendar, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    source?: string;
    status: 'new' | 'contacted' | 'resolved';
    createdAt: string;
}

export default function AdminContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('/api/admin/contacts');
            if (response.ok) {
                const data = await response.json();
                setContacts(data.contacts || []);
            } else {
                setError("Failed to fetch contacts");
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
            setError("Failed to fetch contacts");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this contact?")) return;

        try {
            const response = await fetch(`/api/admin/contacts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setContacts(contacts.filter(contact => contact._id !== id));
                if (selectedContact?._id === id) {
                    setSelectedContact(null);
                }
            } else {
                alert("Failed to delete contact");
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
            alert("Failed to delete contact");
        }
    };

    const updateStatus = async (id: string, status: 'new' | 'contacted' | 'resolved') => {
        try {
            const response = await fetch(`/api/admin/contacts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                setContacts(contacts.map(contact => 
                    contact._id === id ? { ...contact, status } : contact
                ));
                if (selectedContact?._id === id) {
                    setSelectedContact({ ...selectedContact, status });
                }
            } else {
                alert("Failed to update contact status");
            }
        } catch (error) {
            console.error("Error updating contact:", error);
            alert("Failed to update contact status");
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-500/20 text-blue-400';
            case 'contacted': return 'bg-yellow-500/20 text-yellow-400';
            case 'resolved': return 'bg-green-500/20 text-green-400';
            default: return 'bg-gray-500/20 text-gray-400';
        }
    };

    const stats = {
        total: contacts.length,
        new: contacts.filter(c => c.status === 'new').length,
        contacted: contacts.filter(c => c.status === 'contacted').length,
        resolved: contacts.filter(c => c.status === 'resolved').length,
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-medium">CONTACTS</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Contact Messages</h1>
                <p className="text-gray-400 mt-1">View and manage contact form submissions</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { title: "Total Contacts", value: stats.total, icon: MessageSquare, color: "from-blue-500 to-blue-600" },
                    { title: "New", value: stats.new, icon: Mail, color: "from-blue-500 to-blue-600" },
                    { title: "Contacted", value: stats.contacted, icon: Phone, color: "from-yellow-500 to-yellow-600" },
                    { title: "Resolved", value: stats.resolved, icon: Calendar, color: "from-green-500 to-green-600" },
                ].map((stat, index) => (
                    <div key={index} className="card-premium p-4 hover-lift-premium">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">{stat.title}</p>
                                <p className="text-xl font-bold text-white mt-1">{stat.value}</p>
                            </div>
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Contacts List */}
                <div className="lg:col-span-2">
                    <div className="card-premium overflow-hidden">
                        {contacts.length === 0 ? (
                            <div className="text-center py-12">
                                <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-white mb-2">No Messages Found</h3>
                                <p className="text-gray-400">Contact messages will appear here when submitted.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-yellow-400/10">
                                {contacts.map((contact) => (
                                    <div
                                        key={contact._id}
                                        className={`p-4 hover:bg-yellow-400/5 transition-colors cursor-pointer ${
                                            selectedContact?._id === contact._id ? 'bg-yellow-400/10' : ''
                                        }`}
                                        onClick={() => setSelectedContact(contact)}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-white font-medium truncate">{contact.name}</h3>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                                                        {contact.status}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 text-sm mb-1">{contact.email}</p>
                                                <p className="text-gray-300 text-sm line-clamp-2">{contact.message}</p>
                                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                                    <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                                                    {contact.source && <span>via {contact.source}</span>}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 ml-4">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedContact(contact);
                                                    }}
                                                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDelete(contact._id);
                                                    }}
                                                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Details */}
                <div className="lg:col-span-1">
                    <div className="card-premium p-6 sticky top-6">
                        {selectedContact ? (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <User className="w-5 h-5 text-yellow-400" />
                                    <h3 className="text-lg font-semibold text-white">Contact Details</h3>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Name</label>
                                    <p className="text-white font-medium">{selectedContact.name}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Email</label>
                                    <p className="text-white">
                                        <a 
                                            href={`mailto:${selectedContact.email}`}
                                            className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                        >
                                            {selectedContact.email}
                                        </a>
                                    </p>
                                </div>
                                
                                {selectedContact.phone && (
                                    <div>
                                        <label className="text-sm text-gray-400">Phone</label>
                                        <p className="text-white">
                                            <a 
                                                href={`tel:${selectedContact.phone}`}
                                                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                            >
                                                {selectedContact.phone}
                                            </a>
                                        </p>
                                    </div>
                                )}
                                
                                <div>
                                    <label className="text-sm text-gray-400">Status</label>
                                    <div className="flex gap-2 mt-1">
                                        {['new', 'contacted', 'resolved'].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => updateStatus(selectedContact._id, status as any)}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                                    selectedContact.status === status
                                                        ? getStatusColor(status)
                                                        : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                                                }`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Message</label>
                                    <div className="bg-black/30 rounded-lg p-3 mt-1">
                                        <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                                            {selectedContact.message}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-yellow-400/20">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(selectedContact.createdAt).toLocaleString()}
                                    </div>
                                </div>
                                
                                {selectedContact.source && (
                                    <div className="text-xs text-gray-500">
                                        Source: {selectedContact.source}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-white font-medium mb-2">Select a Contact</h3>
                                <p className="text-gray-400 text-sm">Choose a contact from the list to view details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}