/**
 * MY CUSTOM DATA FILE
 * 
 * This is where you put YOUR app data with YOUR custom images!
 * 
 * FOLDER STRUCTURE:
 * 
 * project/
 * ├── index.html
 * ├── styles.css
 * ├── app.js
 * ├── my-data.js (THIS FILE - edit this with your data)
 * └── assets/
 *     ├── app-icons/          (Put your app logo images here)
 *     │   ├── whatsapp.png
 *     │   ├── linkedin.png
 *     │   └── discord.png
 *     ├── category-icons/     (Put your data category icons here)
 *     │   ├── personal-info.png
 *     │   ├── location.png
 *     │   └── device.png
 *     ├── screenshots/        (Put app screenshots here)
 *     │   ├── whatsapp-1.png
 *     │   ├── whatsapp-2.png
 *     │   └── ...
 *     └── ui-images/          (Any other UI images)
 * 
 * IMPORTANT:
 * - Use PNG or JPG images
 * - Recommended sizes:
 *   - App icons: 512x512px
 *   - Category icons: 48x48px
 *   - Screenshots: 1080x1920px (mobile portrait)
 */

// YOUR APP DATA GOES HERE
const appsData = [
    // ============================================
    // EXAMPLE 1: WhatsApp (with custom images)
    // ============================================
    {
        id: 'whatsapp',
        name: 'WhatsApp Messenger',
        category: 'Communication',
        icon: '💬',
        iconUrl: 'assets/app-icons/whatsapp.png',
        rating: '4.5',
        downloads: '5B+',
        size: '45 MB',
        description: 'Simple. Secure. Reliable messaging.',
        
        screenshots: [
            'assets/screenshots/whatsapp-1.png',
            'assets/screenshots/whatsapp-2.png',
            'assets/screenshots/whatsapp-3.png'
        ],
        
        data: {
            appName: 'WhatsApp Messenger',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Email address (optional)',
                                'User IDs',
                                'Phone number'
                            ],
                            purpose:'App functionality, analytics, advertising or marketing, fraud prevention, security, and compliance, account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location Data',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Approximate location (optional)'],
                            purpose: 'App functionality, analytics, advertising or marketing, fraud prevention, security, and compliance, account management'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'Account management'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },


     {
        id: 'noom',
        name: 'Noom: Weight Loss & Health',
        category: 'Health & Fitness',
        icon: '🏃',
        iconUrl: 'assets/app-icons/noom.png',
        rating: '3.6',
        downloads: '10M+',
        size: '45 MB',
        description: 'Psychology-based approach to healthy weight loss.',
        
        screenshots: [
            'assets/screenshots/noom-1.png',
            'assets/screenshots/noom-2.png',
            'assets/screenshots/noom-3.png'
        ],
        
        data: {
            appName: 'Noom: Weight Loss & Health',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Address',
                                'Phone number',
                                'Race and ethnicity',
                                'Other info'
                            ],
                            purpose: 'Analytics, Developer communications, Advertising or marketing, Personalization, Account management'
                        },
                        collected: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Address',
                                'Phone number',
                                'Race and ethnicity',
                                'Other info'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'health-fitness',
                    name: 'Health and Fitness',
                    icon: '💪',
                    iconUrl: 'assets/category-icons/health.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Health info',
                                'Fitness info'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Personalization, Account management'
                        },
                        collected: {
                            items: [
                                'Health info (optional)',
                                'Fitness info'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Approximate location'],
                            purpose: 'Analytics, Advertising or marketing, Personalization, Account management'
                        },
                        collected: {
                            items: ['Approximate location'],
                            purpose: 'Analytics, Advertising or marketing, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Photos',
                                'Videos'
                            ],
                            purpose: 'App functionality, Advertising or marketing, Personalization, Account management'
                        },
                        collected: {
                            items: [
                                'Photos (optional)',
                                'Videos (optional)'
                            ],
                            purpose: 'App functionality, Advertising or marketing, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Other in-app messages'],
                            purpose: 'App functionality, Analytics, Personalization'
                        },
                        collected: {
                            items: ['Other in-app messages (optional)'],
                            purpose: 'App functionality, Analytics, Personalization'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other user-generated content'
                            ],
                            purpose: 'Analytics, Advertising or marketing, Personalization'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other user-generated content (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Analytics'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'Analytics'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        }
                    }
                },
                {
                    id: 'web-browsing',
                    name: 'Web Browsing',
                    icon: '🌐',
                    iconUrl: 'assets/category-icons/web.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Web browsing history'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: ['Web browsing history'],
                            purpose: 'Advertising or marketing'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },


    // ============================================
// ZOOM WORKPLACE
// ============================================
{
    id: 'zoom',
    name: 'Zoom Workplace',
    category: 'Business',
    icon: '📹',
    iconUrl: 'assets/app-icons/zoom.png',
    rating: '4.4',
    downloads: '1B+',
    size: '89 MB',
    description: 'Video meetings, team chat, whiteboard, and more in one platform.',
    
    screenshots: [
        'assets/screenshots/zoom-1.png',
        'assets/screenshots/zoom-2.png',
        'assets/screenshots/zoom-3.png'
    ],
    
    data: {
        appName: 'Zoom Workplace',
        reportTitle: 'Data safety report',
        legend: {
            shared: 'Shared (Risk)',
            collected: 'Collected (Safe)'
        },
        
        categories: [
            {
                id: 'personal-info',
                name: 'Personal Info',
                icon: '👤',
                iconUrl: 'assets/category-icons/personal-info.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Name',
                            'Email address',
                            'User IDs',
                            'Address (optional)',
                            'Phone number (optional)',
                            'Other info (optional)'
                        ],
                        purpose: 'App functionality, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                    }
                }
            },
            {
                id: 'location',
                name: 'Location',
                icon: '📍',
                iconUrl: 'assets/category-icons/location.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Precise location (optional)'],
                        purpose: 'App functionality, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'photos-videos',
                name: 'Photos and Videos',
                icon: '📷',
                iconUrl: 'assets/category-icons/photos.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Photos (optional)',
                            'Videos (optional)'
                        ],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'messages',
                name: 'Messages',
                icon: '💬',
                iconUrl: 'assets/category-icons/messages.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Other in-app messages'],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'app-activity',
                name: 'App Activity',
                icon: '📊',
                iconUrl: 'assets/category-icons/activity.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'App interactions',
                            'In-app search history',
                            'Other user-generated content',
                            'Other actions'
                        ],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'device-info',
                name: 'Device or other IDs',
                icon: '📱',
                iconUrl: 'assets/category-icons/device.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Device or other IDs'],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'files-docs',
                name: 'Files and Docs',
                icon: '📄',
                iconUrl: 'assets/category-icons/files.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Files and docs (optional)'],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'app-performance',
                name: 'App Info and Performance',
                icon: '⚡',
                iconUrl: 'assets/category-icons/performance.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Crash logs (optional)',
                            'Diagnostics (optional)'
                        ],
                        purpose: 'App functionality, Analytics'
                    }
                }
            },
            {
                id: 'contacts',
                name: 'Contacts',
                icon: '📇',
                iconUrl: 'assets/category-icons/contacts.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Contacts (optional)'],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'audio',
                name: 'Audio',
                icon: '🎤',
                iconUrl: 'assets/category-icons/audio.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Voice or sound recordings (optional)',
                            'Music files (optional)',
                            'Other audio files (optional)'
                        ],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'financial-info',
                name: 'Financial Info',
                icon: '💳',
                iconUrl: 'assets/category-icons/financial.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Purchase history'],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Account management'
                    }
                }
            },
            {
                id: 'calendar',
                name: 'Calendar',
                icon: '📅',
                iconUrl: 'assets/category-icons/calendar.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Calendar events (optional)'],
                        purpose: 'App functionality'
                    }
                }
            }
        ],
        
        securityPractices: {
            dataEncryptedInTransit: true,
            dataCanBeDeleted: true
        }
    }
},

// ============================================
// PAYPAL
// ============================================
{
    id: 'paypal',
    name: 'PayPal - Pay, Send, Save',
    category: 'Finance',
    icon: '💰',
    iconUrl: 'assets/app-icons/paypal.png',
    rating: '4.5',
    downloads: '100M+',
    size: '76 MB',
    description: 'Send money, shop online, and manage your finances securely.',
    
    screenshots: [
        'assets/screenshots/paypal-1.png',
        'assets/screenshots/paypal-2.png',
        'assets/screenshots/paypal-3.png'
    ],
    
    data: {
        appName: 'PayPal - Pay, Send, Save',
        reportTitle: 'Data safety report',
        legend: {
            shared: 'Shared (Risk)',
            collected: 'Collected (Safe)'
        },
        
        categories: [
            {
                id: 'personal-info',
                name: 'Personal Info',
                icon: '👤',
                iconUrl: 'assets/category-icons/personal-info.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Email address'],
                        purpose: 'Advertising or marketing'
                    },
                    collected: {
                        items: [
                            'Name',
                            'Email address',
                            'User IDs',
                            'Address',
                            'Phone number'
                        ],
                        purpose: 'App functionality, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                    }
                }
            },
            {
                id: 'location',
                name: 'Location',
                icon: '📍',
                iconUrl: 'assets/category-icons/location.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Approximate location',
                            'Precise location (optional)'
                        ],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'photos-videos',
                name: 'Photos and Videos',
                icon: '📷',
                iconUrl: 'assets/category-icons/photos.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Photos (optional)'],
                        purpose: 'App functionality, Fraud prevention, security, and compliance, Personalization'
                    }
                }
            },
            {
                id: 'app-activity',
                name: 'App Activity',
                icon: '📊',
                iconUrl: 'assets/category-icons/activity.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'App interactions',
                            'In-app search history',
                            'Other user-generated content (optional)'
                        ],
                        purpose: 'Analytics, Advertising or marketing, Personalization'
                    }
                }
            },
            {
                id: 'device-info',
                name: 'Device or other IDs',
                icon: '📱',
                iconUrl: 'assets/category-icons/device.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Device or other IDs'],
                        purpose: 'App functionality, Advertising or marketing, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'financial-info',
                name: 'Financial Info',
                icon: '💳',
                iconUrl: 'assets/category-icons/financial.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'User payment info',
                            'Purchase history',
                            'Credit score (optional)'
                        ],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                    }
                }
            },
            {
                id: 'files-docs',
                name: 'Files and Docs',
                icon: '📄',
                iconUrl: 'assets/category-icons/files.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Files and docs (optional)'],
                        purpose: 'App functionality, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'app-performance',
                name: 'App Info and Performance',
                icon: '⚡',
                iconUrl: 'assets/category-icons/performance.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Crash logs',
                            'Diagnostics',
                            'Other app performance data'
                        ],
                        purpose: 'Analytics'
                    }
                }
            },
            {
                id: 'contacts',
                name: 'Contacts',
                icon: '📇',
                iconUrl: 'assets/category-icons/contacts.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Contacts (optional)'],
                        purpose: 'App functionality'
                    }
                }
            }
        ],
        
        securityPractices: {
            dataEncryptedInTransit: true,
            dataCanBeDeleted: true
        }
    }
},

    // ============================================
    // BOOKING.COM
    // ============================================
    {
        id: 'booking',
        name: 'Booking.com: Hotels and more',
        category: 'Travel & Local',
        icon: '✈️',
        iconUrl: 'assets/app-icons/booking.png',
        rating: '4.7',
        downloads: '500M+',
        size: '65 MB',
        description: 'Book hotels, homes, and experiences worldwide.',
        
        screenshots: [
            'assets/screenshots/booking-1.png',
            'assets/screenshots/booking-2.png',
            'assets/screenshots/booking-3.png'
        ],
        
        data: {
            appName: 'Booking.com: Hotels and more',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Address',
                                'Phone number',
                                'Other info'
                            ],
                            purpose: 'App functionality, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        },
                        collected: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs (optional)',
                                'Address',
                                'Phone number',
                                'Other info (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'User payment info',
                                'Other financial info'
                            ],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'User payment info',
                                'Other financial info'
                            ],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Photos',
                                'Videos'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications'
                        },
                        collected: {
                            items: ['Videos (optional)'],
                            purpose: 'App functionality, Analytics, Developer communications'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Other in-app messages'],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Other user-generated content'],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: [
                                'App interactions (optional)',
                                'In-app search history (optional)'
                            ],
                            purpose: 'Analytics, Personalization'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Analytics, Advertising or marketing'
                        },
                        collected: {
                            items: ['Device or other IDs (optional)'],
                            purpose: 'Analytics, Advertising or marketing'
                        }
                    }
                },
                {
                    id: 'files-docs',
                    name: 'Files and Docs',
                    icon: '📄',
                    iconUrl: 'assets/category-icons/files.png',
                    status: {
                        shared: true,
                        collected: false
                    },
                    details: {
                        shared: {
                            items: ['Files and docs'],
                            purpose: 'App functionality, Analytics'
                        },
                        collected: {
                            items: [],
                            purpose: null
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics'
                            ],
                            purpose: 'Analytics'
                        }
                    }
                },
                {
                    id: 'audio',
                    name: 'Audio',
                    icon: '🎤',
                    iconUrl: 'assets/category-icons/audio.png',
                    status: {
                        shared: true,
                        collected: false
                    },
                    details: {
                        shared: {
                            items: ['Voice or sound recordings'],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: [],
                            purpose: null
                        }
                    }
                },
                {
                    id: 'calendar',
                    name: 'Calendar',
                    icon: '📅',
                    iconUrl: 'assets/category-icons/calendar.png',
                    status: {
                        shared: true,
                        collected: false
                    },
                    details: {
                        shared: {
                            items: ['Calendar events'],
                            purpose: 'App functionality, Analytics'
                        },
                        collected: {
                            items: [],
                            purpose: null
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },

    // ============================================
    // INSTAGRAM
    // ============================================
    {
        id: 'instagram',
        name: 'Instagram',
        category: 'Social',
        icon: '📸',
        iconUrl: 'assets/app-icons/instagram.png',
        rating: '4.4',
        downloads: '5B+',
        size: '87 MB',
        description: 'Create and share photos, stories, and videos with friends.',
        
        screenshots: [
            'assets/screenshots/instagram-1.png',
            'assets/screenshots/instagram-2.png',
            'assets/screenshots/instagram-3.png'
        ],
        
        data: {
            appName: 'Instagram',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Phone number'
                            ],
                            purpose: 'Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'Name (optional)',
                                'Email address (optional)',
                                'User IDs',
                                'Address (optional)',
                                'Phone number (optional)',
                                'Political or religious beliefs (optional)',
                                'Sexual orientation (optional)',
                                'Other info (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'User payment info (optional)',
                                'Purchase history (optional)',
                                'Credit score (optional)',
                                'Other financial info (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Approximate location',
                                'Precise location (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Photos (optional)',
                                'Videos (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Emails (optional)',
                                'SMS or MMS (optional)',
                                'Other in-app messages (optional)'
                            ],
                            purpose: 'App functionality, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Installed apps',
                                'Other user-generated content (optional)',
                                'Other actions'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'files-docs',
                    name: 'Files and Docs',
                    icon: '📄',
                    iconUrl: 'assets/category-icons/files.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Files and docs (optional)'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'health-fitness',
                    name: 'Health and Fitness',
                    icon: '💪',
                    iconUrl: 'assets/category-icons/health.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Health info (optional)',
                                'Fitness info (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'audio',
                    name: 'Audio',
                    icon: '🎤',
                    iconUrl: 'assets/category-icons/audio.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Voice or sound recordings (optional)',
                                'Music files (optional)',
                                'Other audio files (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'calendar',
                    name: 'Calendar',
                    icon: '📅',
                    iconUrl: 'assets/category-icons/calendar.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Calendar events (optional)'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'web-browsing',
                    name: 'Web Browsing',
                    icon: '🌐',
                    iconUrl: 'assets/category-icons/web.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Web browsing history'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'contacts',
                    name: 'Contacts',
                    icon: '📇',
                    iconUrl: 'assets/category-icons/contacts.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Contacts (optional)'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },

    // ============================================
    // QUIZLET
    // ============================================
    {
        id: 'quizlet',
        name: 'Quizlet: More than Flashcards',
        category: 'Education',
        icon: '📚',
        iconUrl: 'assets/app-icons/quizlet.png',
        rating: '4.5',
        downloads: '50M+',
        size: '56 MB',
        description: 'Study with flashcards, games, and more. Learn anything!',
        
        screenshots: [
            'assets/screenshots/quizlet-1.png',
            'assets/screenshots/quizlet-2.png',
            'assets/screenshots/quizlet-3.png'
        ],
        
        data: {
            appName: 'Quizlet: More than Flashcards',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Other info'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        },
                        collected: {
                            items: [
                                'Name (optional)',
                                'Email address',
                                'User IDs',
                                'Other info'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Approximate location'],
                            purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        },
                        collected: {
                            items: ['Approximate location'],
                            purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Photos (optional)'],
                            purpose: 'Personalization'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other actions'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other user-generated content',
                                'Other actions'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'files-docs',
                    name: 'Files and Docs',
                    icon: '📄',
                    iconUrl: 'assets/category-icons/files.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Files and docs'],
                            purpose: 'App functionality, Analytics, Personalization'
                        },
                        collected: {
                            items: ['Files and docs (optional)'],
                            purpose: 'App functionality, Analytics, Personalization'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Crash logs',
                                'Diagnostics'
                            ],
                            purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics'
                            ],
                            purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },


    // ============================================
    // EXAMPLE 3: Discord
    // ============================================
    {
        id: 'discord',
        name: 'Discord - Talk, Play, Hang Out',
        category: 'Social',
        icon: '🎮',
        iconUrl: 'assets/app-icons/discord.png',
        rating: '4.3',
        downloads: '500M+',
        size: '95 MB',
        description: 'Your place to talk and hang out.',
        
        screenshots: [
            'assets/screenshots/discord-1.png',
            'assets/screenshots/discord-2.png',
            'assets/screenshots/discord-3.png'
        ],
        
        data: {
            appName: 'Discord - Talk, Play, Hang Out',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Email address', 'Username', 'User IDs'],
                            purpose: 'Account management, App functionality'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Photos', 'Videos'],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: ['Photos (optional)', 'Videos (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Text messages', 'Voice messages'],
                            purpose: 'App functionality, Analytics'
                        }
                    }
                }
            ],
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },

    {
    id: 'minecraft',
    name: 'Minecraft: Dream it, Build it!',
    category: 'Adventure',
    icon: '⛏️',
    iconUrl: 'assets/app-icons/minecraft.png',
    rating: '4.6',
    downloads: '50M+',
    size: '579 MB',
    description: 'Build, explore, and survive in infinite worlds.',
    
    screenshots: [
        'assets/screenshots/minecraft-1.png',
        'assets/screenshots/minecraft-2.png',
        'assets/screenshots/minecraft-3.png'
    ],
    
    data: {
        appName: 'Minecraft: Dream it, Build it!',
        reportTitle: 'Data safety report',
        legend: {
            shared: 'Shared (Risk)',
            collected: 'Collected (Safe)'
        },
        
        categories: [
            {
                id: 'personal-info',
                name: 'Personal Info',
                icon: '👤',
                iconUrl: 'assets/category-icons/personal-info.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['User IDs'],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Personalization'
                    },
                    collected: {
                        items: [
                            'Name (optional)',
                            'Email address (optional)',
                            'User IDs',
                            'Phone number (optional)'
                        ],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                    }
                }
            },
            {
                id: 'location',
                name: 'Location',
                icon: '📍',
                iconUrl: 'assets/category-icons/location.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Approximate location'],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Personalization'
                    },
                    collected: {
                        items: ['Approximate location'],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Personalization'
                    }
                }
            },
            {
                id: 'messages',
                name: 'Messages',
                icon: '💬',
                iconUrl: 'assets/category-icons/messages.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Other in-app messages'],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'app-activity',
                name: 'App Activity',
                icon: '📊',
                iconUrl: 'assets/category-icons/activity.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['App interactions'],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing'
                    },
                    collected: {
                        items: [
                            'App interactions',
                            'In-app search history',
                            'Other user-generated content',
                            'Other actions'
                        ],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                    }
                }
            },
            {
                id: 'device-info',
                name: 'Device or other IDs',
                icon: '📱',
                iconUrl: 'assets/category-icons/device.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Device or other IDs'],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'financial-info',
                name: 'Financial Info',
                icon: '💳',
                iconUrl: 'assets/category-icons/financial.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'User payment info (optional)',
                            'Purchase history'
                        ],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Personalization'
                    }
                }
            },
            {
                id: 'app-performance',
                name: 'App Info and Performance',
                icon: '⚡',
                iconUrl: 'assets/category-icons/performance.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Crash logs',
                            'Diagnostics',
                            'Other app performance data'
                        ],
                        purpose: 'App functionality, Analytics'
                    }
                }
            }
        ],
        
        securityPractices: {
            dataEncryptedInTransit: true,
            dataCanBeDeleted: true
        }
    }
},

// ============================================
// EA SPORTS FC MOBILE
// ============================================
{
    id: 'ea-fc-mobile',
    name: 'EA SPORTS FC™ Mobile Soccer',
    category: 'Sports',
    icon: '⚽',
    iconUrl: 'assets/app-icons/ea-fc.png',
    rating: '4.1',
    downloads: '500M+',
    size: '130 MB',
    description: 'Build your Ultimate Team and compete in soccer matches.',
    
    screenshots: [
        'assets/screenshots/ea-fc-1.png',
        'assets/screenshots/ea-fc-2.png',
        'assets/screenshots/ea-fc-3.png'
    ],
    
    data: {
        appName: 'EA SPORTS FC™ Mobile Soccer',
        reportTitle: 'Data safety report',
        legend: {
            shared: 'Shared (Risk)',
            collected: 'Collected (Safe)'
        },
        
        categories: [
            {
                id: 'personal-info',
                name: 'Personal Info',
                icon: '👤',
                iconUrl: 'assets/category-icons/personal-info.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Name (optional)',
                            'User IDs'
                        ],
                        purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Personalization, Account management'
                    }
                }
            },
            {
                id: 'location',
                name: 'Location',
                icon: '📍',
                iconUrl: 'assets/category-icons/location.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Approximate location'],
                        purpose: 'Advertising or marketing'
                    },
                    collected: {
                        items: ['Approximate location'],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                    }
                }
            },
            {
                id: 'photos-videos',
                name: 'Photos and Videos',
                icon: '📷',
                iconUrl: 'assets/category-icons/photos.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Photos (optional)',
                            'Videos (optional)'
                        ],
                        purpose: 'App functionality'
                    }
                }
            },
            {
                id: 'app-activity',
                name: 'App Activity',
                icon: '📊',
                iconUrl: 'assets/category-icons/activity.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Other actions'],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                    }
                }
            },
            {
                id: 'device-info',
                name: 'Device or other IDs',
                icon: '📱',
                iconUrl: 'assets/category-icons/device.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Device or other IDs'],
                        purpose: 'Advertising or marketing'
                    },
                    collected: {
                        items: ['Device or other IDs (optional)'],
                        purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                    }
                }
            },
            {
                id: 'financial-info',
                name: 'Financial Info',
                icon: '💳',
                iconUrl: 'assets/category-icons/financial.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: ['Purchase history'],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                    }
                }
            },
            {
                id: 'app-performance',
                name: 'App Info and Performance',
                icon: '⚡',
                iconUrl: 'assets/category-icons/performance.png',
                status: {
                    shared: false,
                    collected: true
                },
                details: {
                    shared: {
                        items: [],
                        purpose: null
                    },
                    collected: {
                        items: [
                            'Crash logs',
                            'Diagnostics',
                            'Other app performance data'
                        ],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                    }
                }
            }
        ],
        
        securityPractices: {
            dataEncryptedInTransit: true,
            dataCanBeDeleted: true
        }
    }
},


    // ============================================
    // BUMBLE DATING APP
    // ============================================
    {
        id: 'bumble',
        name: 'Bumble Dating app: Chat & Meet',
        category: 'Dating',
        icon: '💛',
        iconUrl: 'assets/app-icons/bumble.png',
        rating: '3.9',
        downloads: '100M+',
        size: '75 MB',
        description: 'Date, meet friends, and network better.',
        
        screenshots: [
            'assets/screenshots/bumble-1.png',
            'assets/screenshots/bumble-2.png',
            'assets/screenshots/bumble-3.png'
        ],
        
        data: {
            appName: 'Bumble Dating app: Chat & Meet',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Phone number',
                                'Other info'
                            ],
                            purpose: 'Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        },
                        collected: {
                            items: [
                                'Name',
                                'Email address (optional)',
                                'User IDs',
                                'Phone number',
                                'Race and ethnicity (optional)',
                                'Political or religious beliefs (optional)',
                                'Sexual orientation',
                                'Other info'
                            ],
                            purpose: 'App functionality, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Photos',
                                'Videos (optional)'
                            ],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Approximate location'],
                            purpose: 'App functionality, Analytics, Personalization'
                        },
                        collected: {
                            items: [
                                'Approximate location',
                                'Precise location'
                            ],
                            purpose: 'App functionality, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Other in-app messages'],
                            purpose: 'Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'Emails',
                                'Other in-app messages'
                            ],
                            purpose: 'App functionality, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['App interactions'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Installed apps',
                                'Other user-generated content',
                                'Other actions'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'User payment info',
                                'Purchase history'
                            ],
                            purpose: 'Fraud prevention, security, and compliance, Account management'
                        },
                        collected: {
                            items: [
                                'User payment info',
                                'Purchase history'
                            ],
                            purpose: 'App functionality, Advertising or marketing, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Crash logs'],
                            purpose: 'Analytics'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        }
                    }
                },
                {
                    id: 'contacts',
                    name: 'Contacts',
                    icon: '📇',
                    iconUrl: 'assets/category-icons/contacts.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Contacts (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'audio',
                    name: 'Audio',
                    icon: '🎤',
                    iconUrl: 'assets/category-icons/audio.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Voice or sound recordings (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },


    {
    id: 'subway-surfers',
    name: 'Subway Surfers',
    category: 'Arcade',
    icon: '🏃',
    iconUrl: 'assets/app-icons/subway-surfers.png',
    rating: '4.3',
    downloads: '1B+',
    size: '143 MB ',
    description: 'Dash through the subway and dodge oncoming trains!',
    
    screenshots: [
        'assets/screenshots/subway-surfers-1.png',
        'assets/screenshots/subway-surfers-2.png',
        'assets/screenshots/subway-surfers-3.png'
    ],
    
    data: {
        appName: 'Subway Surfers',
        reportTitle: 'Data safety report',
        legend: {
            shared: 'Shared (Risk)',
            collected: 'Collected (Safe)'
        },
        
        categories: [
            {
                id: 'personal-info',
                name: 'Personal Info',
                icon: '👤',
                iconUrl: 'assets/category-icons/personal-info.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['User IDs'],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                    },
                    collected: {
                        items: ['User IDs'],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'location',
                name: 'Location',
                icon: '📍',
                iconUrl: 'assets/category-icons/location.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Approximate location'],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                    },
                    collected: {
                        items: ['Approximate location'],
                        purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'app-activity',
                name: 'App Activity',
                icon: '📊',
                iconUrl: 'assets/category-icons/activity.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: [
                            'App interactions',
                            'Other actions'
                        ],
                        purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                    },
                    collected: {
                        items: [
                            'App interactions',
                            'Other actions'
                        ],
                        purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                    }
                }
            },
            {
                id: 'device-info',
                name: 'Device or other IDs',
                icon: '📱',
                iconUrl: 'assets/category-icons/device.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Device or other IDs'],
                        purpose: 'App functionality, Analytics'
                    },
                    collected: {
                        items: ['Device or other IDs'],
                        purpose: 'Analytics'
                    }
                }
            },
            {
                id: 'financial-info',
                name: 'Financial Info',
                icon: '💳',
                iconUrl: 'assets/category-icons/financial.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Purchase history'],
                        purpose: 'Advertising or marketing'
                    },
                    collected: {
                        items: ['Purchase history (optional)'],
                        purpose: 'Advertising or marketing'
                    }
                }
            },
            {
                id: 'app-performance',
                name: 'App Info and Performance',
                icon: '⚡',
                iconUrl: 'assets/category-icons/performance.png',
                status: {
                    shared: true,
                    collected: true
                },
                details: {
                    shared: {
                        items: ['Diagnostics'],
                        purpose: 'App functionality, Analytics'
                    },
                    collected: {
                        items: [
                            'Crash logs',
                            'Diagnostics',
                            'Other app performance data'
                        ],
                        purpose: 'App functionality, Analytics'
                    }
                }
            }
        ],
        
        securityPractices: {
            dataEncryptedInTransit: true,
            dataCanBeDeleted: true
        }
    }
},













    {
        id: 'chatgpt',
        name: 'ChatGPT',
        category: 'Productivity',
        icon: '🤖',
        iconUrl: 'assets/app-icons/chatgpt.png',
        rating: '4.5',
        downloads: '500M+',
        size: '57 MB',
        description: 'OpenAI\'s conversational AI assistant.',
        developer: 'OpenAI',
        inAppPurchases: true,
        ratedFor: '12+',
        
        screenshots: [
            'assets/screenshots/chatgpt-1.png',
            'assets/screenshots/chatgpt-2.png',
            'assets/screenshots/chatgpt-3.png'
        ],
        
        data: {
            appName: 'ChatGPT',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Name',
                                'Email address'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                       shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Approximate location'],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Other in-app messages (optional)'],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'Other user-generated content (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: false
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Advertising or marketing, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [],
                            purpose: null
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },
    {
        id: 'claude',
        name: 'Claude by Anthropic',
        category: 'Productivity',
        icon: '🧠',
        iconUrl: 'assets/app-icons/claude.png',
        rating: '4.5',
        downloads: '10M+',
        size: '76 MB',
        description: 'Anthropic\'s advanced AI assistant.',
        developer: 'Anthropic PBC',
        inAppPurchases: true,
        ratedFor: '12+',
        
        screenshots: [
            'assets/screenshots/claude-1.png',
            'assets/screenshots/claude-2.png',
            'assets/screenshots/claude-3.png'
        ],
        
        data: {
            appName: 'Claude by Anthropic',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Email address',
                                'User IDs',
                                'Phone number'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        },
                        collected: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Phone number'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Approximate location'],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: [
                                'Approximate location',
                                'Precise location (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                       shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Photos (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'files-docs',
                    name: 'Files and Docs',
                    icon: '📄',
                    iconUrl: 'assets/category-icons/files.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Files and docs (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['App interactions'],
                            purpose: 'Analytics, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'Other user-generated content'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'Analytics'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },
    {
        id: 'deepseek',
        name: 'DeepSeek - AI Assistant',
        category: 'Productivity',
        icon: '🔍',
        iconUrl: 'assets/app-icons/deepseek.png',
        rating: '4.1',
        downloads: '50M+',
        size: '105 MB',
        description: 'DeepSeek AI assistant for various tasks.',
        developer: 'DeepSeek',
        inAppPurchases: false,
        ratedFor: '12+',
        
        screenshots: [
            'assets/screenshots/deepseek-1.png',
            'assets/screenshots/deepseek-2.png',
            'assets/screenshots/deepseek-3.png'
        ],
        
        data: {
            appName: 'DeepSeek - AI Assistant',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Name (optional)',
                                'Email address',
                                'User IDs',
                                'Phone number'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                       shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Approximate location'],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Photos (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'files-docs',
                    name: 'Files and Docs',
                    icon: '📄',
                    iconUrl: 'assets/category-icons/files.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                       shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Files and docs (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                       shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history (optional)',
                                'Installed apps (optional)',
                                'Other user-generated content'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Account management'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },
    {
        id: 'perplexity',
        name: 'Perplexity - Ask Anything',
        category: 'Productivity',
        icon: '🔮',
        iconUrl: 'assets/app-icons/perplexity.png',
        rating: '4.4',
        downloads: '50M+',
        size: '73 MB',
        description: 'AI-powered search and answer engine.',
        developer: 'PerplexityAI',
        inAppPurchases: true,
        ratedFor: '12+',
        
        screenshots: [
            'assets/screenshots/perplexity-1.png',
            'assets/screenshots/perplexity-2.png',
            'assets/screenshots/perplexity-3.png'
        ],
        
        data: {
            appName: 'Perplexity - Ask Anything',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        
                        collected: {
                            items: ['Email address (optional)'],
                            purpose: 'App functionality, Analytics, Developer communications, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Approximate location (optional)',
                                'Precise location (optional)'
                            ],
                            purpose: 'App functionality, Personalization'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                      shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Purchase history'],
                            purpose: 'App functionality, Analytics'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                       shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['App interactions'],
                            purpose: 'App functionality, Analytics'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'App functionality'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },

    // ============================================
    // AMAZON SHOPPING
    // ============================================
    {
        id: 'amazon-shopping',
        name: 'Amazon Shopping',
        category: 'Shopping',
        icon: '🛒',
        iconUrl: 'assets/app-icons/amazon.png',
        rating: '4.2',
        downloads: '500M+',
        size: '89 MB',
        description: 'Shop, track orders, and discover deals on millions of products.',
        
        screenshots: [
            'assets/screenshots/amazon-1.png',
            'assets/screenshots/amazon-2.png',
            'assets/screenshots/amazon-3.png'
        ],
        
        data: {
            appName: 'Amazon Shopping',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'Address',
                                'Phone number',
                                'Other info'
                            ],
                            purpose: 'App functionality, Fraud prevention, security, and compliance, Account management'
                        },
                        collected: {
                            items: [
                                'Name (optional)',
                                'Email address (optional)',
                                'User IDs (optional)',
                                'Address (optional)',
                                'Phone number (optional)',
                                'Other info (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Photos',
                                'Videos'
                            ],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'Photos (optional)',
                                'Videos (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Approximate location (optional)',
                                'Precise location (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Other in-app messages (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'App interactions',
                                'Other user-generated content'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history (optional)',
                                'Other user-generated content (optional)',
                                'Other actions (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'User payment info',
                                'Other financial info'
                            ],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'User payment info (optional)',
                                'Purchase history (optional)',
                                'Other financial info (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Advertising or marketing, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'files-docs',
                    name: 'Files and Docs',
                    icon: '📄',
                    iconUrl: 'assets/category-icons/files.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Files and docs (optional)'],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'health-fitness',
                    name: 'Health and Fitness',
                    icon: '💪',
                    iconUrl: 'assets/category-icons/health.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Health info'],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: ['Health info (optional)'],
                            purpose: 'App functionality, Account management'
                        }
                    }
                },
                {
                    id: 'audio',
                    name: 'Audio',
                    icon: '🎤',
                    iconUrl: 'assets/category-icons/audio.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Voice or sound recordings (optional)'],
                            purpose: 'App functionality, Analytics, Personalization'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },

    // ============================================
    // REDDIT
    // ============================================
    {
        id: 'reddit',
        name: 'Reddit',
        category: 'Social',
        icon: '🤖',
        iconUrl: 'assets/app-icons/reddit.png',
        rating: '4.4',
        downloads: '100M+',
        size: '93 MB',
        description: 'Dive into anything. Reddit is home to thousands of communities.',
        
        screenshots: [
            'assets/screenshots/reddit-1.png',
            'assets/screenshots/reddit-2.png',
            'assets/screenshots/reddit-3.png'
        ],
        
        data: {
            appName: 'Reddit',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['User IDs'],
                            purpose: 'Analytics'
                        },
                        collected: {
                            items: [
                                'Email address',
                                'User IDs (optional)',
                                'Phone number (optional)'
                            ],
                            purpose: 'Developer communications, App functionality, Advertising or marketing, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Photos',
                                'Videos'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'Photos (optional)',
                                'Videos (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Approximate location (optional)'],
                            purpose: 'App functionality, Personalization'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Other in-app messages'],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: ['Other in-app messages (optional)'],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other user-generated content',
                                'Other actions'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other user-generated content',
                                'Other actions'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Device or other IDs (optional)'],
                            purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'files-docs',
                    name: 'Files and Docs',
                    icon: '📄',
                    iconUrl: 'assets/category-icons/files.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Files and docs'],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: ['Files and docs (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Crash logs',
                                'Diagnostics'
                            ],
                            purpose: 'Analytics'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics'
                            ],
                            purpose: 'Analytics'
                        }
                    }
                },
                {
                    id: 'audio',
                    name: 'Audio',
                    icon: '🎤',
                    iconUrl: 'assets/category-icons/audio.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Voice or sound recordings',
                                'Music files'
                            ],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: ['Music files (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'web-browsing',
                    name: 'Web Browsing',
                    icon: '🌐',
                    iconUrl: 'assets/category-icons/web.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Web browsing history (optional)'],
                            purpose: 'Advertising or marketing'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: false,
                dataCanBeDeleted: true
            }
        }
    },

    // ============================================
    // PINTEREST
    // ============================================
    {
        id: 'pinterest',
        name: 'Pinterest',
        category: 'Lifestyle',
        icon: '📌',
        iconUrl: 'assets/app-icons/pinterest.png',
        rating: '4.5',
        downloads: '1B+',
        size: '55 MB',
        description: 'Get inspired and find ideas for all your projects and interests.',
        
        screenshots: [
            'assets/screenshots/pinterest-1.png',
            'assets/screenshots/pinterest-2.png',
            'assets/screenshots/pinterest-3.png'
        ],
        
        data: {
            appName: 'Pinterest',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Address',
                                'Other info'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        },
                        collected: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Address (optional)',
                                'Phone number (optional)',
                                'Other info'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Photos (optional)',
                                'Videos (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Approximate location'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: [
                                'Approximate location',
                                'Precise location (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Other in-app messages (optional)'],
                            purpose: 'App functionality, Analytics, Developer communications, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Installed apps',
                                'Other user-generated content',
                                'Other actions'
                            ],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Installed apps',
                                'Other user-generated content (optional)',
                                'Other actions (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Purchase history'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: [
                                'User payment info (optional)',
                                'Purchase history'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Account management'
                        }
                    }
                },
                {
                    id: 'web-browsing',
                    name: 'Web Browsing',
                    icon: '🌐',
                    iconUrl: 'assets/category-icons/web.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Web browsing history'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: ['Web browsing history'],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'audio',
                    name: 'Audio',
                    icon: '🎤',
                    iconUrl: 'assets/category-icons/audio.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: [
                                'Voice or sound recordings (optional)',
                                'Music files (optional)',
                                'Other audio files (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'contacts',
                    name: 'Contacts',
                    icon: '📇',
                    iconUrl: 'assets/category-icons/contacts.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Contacts (optional)'],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },

    // ============================================
    // UDEMY - ONLINE COURSES
    // ============================================
    {
        id: 'udemy',
        name: 'Udemy - Online Courses',
        category: 'Education',
        icon: '🎓',
        iconUrl: 'assets/app-icons/udemy.png',
        rating: '4.7',
        downloads: '10M+',
        size: '87 MB',
        description: 'Learn anything, anytime. Choose from thousands of online courses.',
        
        screenshots: [
            'assets/screenshots/udemy-1.png',
            'assets/screenshots/udemy-2.png',
            'assets/screenshots/udemy-3.png'
        ],
        
        data: {
            appName: 'Udemy - Online Courses',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs'
                            ],
                            purpose: 'Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        },
                        collected: {
                            items: [
                                'Name (optional)',
                                'Email address',
                                'User IDs'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'photos-videos',
                    name: 'Photos and Videos',
                    icon: '📷',
                    iconUrl: 'assets/category-icons/photos.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Photos',
                                'Videos'
                            ],
                            purpose: 'App functionality'
                        },
                        collected: {
                            items: [
                                'Photos (optional)',
                                'Videos (optional)'
                            ],
                            purpose: 'App functionality'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Approximate location'],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        },
                        collected: {
                            items: ['Approximate location'],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['App interactions'],
                            purpose: 'Analytics, Advertising or marketing'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other user-generated content',
                                'Other actions'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Personalization'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['User payment info'],
                            purpose: 'App functionality, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: ['Purchase history'],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Advertising or marketing'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Advertising or marketing, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'calendar',
                    name: 'Calendar',
                    icon: '📅',
                    iconUrl: 'assets/category-icons/calendar.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Calendar events (optional)'],
                            purpose: 'App functionality'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    },

    // ============================================
    // PRIME VIDEO
    // ============================================
    {
        id: 'prime-video',
        name: 'Prime Video',
        category: 'Entertainment',
        icon: '🎬',
        iconUrl: 'assets/app-icons/prime-video.png',
        rating: '3.9',
        downloads: '500M+',
        size: '98 MB',
        description: 'Watch movies, TV shows, and Amazon Originals.',
        
        screenshots: [
            'assets/screenshots/prime-video-1.png',
            'assets/screenshots/prime-video-2.png',
            'assets/screenshots/prime-video-3.png'
        ],
        
        data: {
            appName: 'Prime Video',
            reportTitle: 'Data safety report',
            legend: {
                shared: 'Shared (Risk)',
                collected: 'Collected (Safe)'
            },
            
            categories: [
                {
                    id: 'personal-info',
                    name: 'Personal Info',
                    icon: '👤',
                    iconUrl: 'assets/category-icons/personal-info.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs'
                            ],
                            purpose: 'App functionality, Advertising or marketing'
                        },
                        collected: {
                            items: [
                                'Name',
                                'Email address',
                                'User IDs',
                                'Address (optional)',
                                'Phone number'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'location',
                    name: 'Location',
                    icon: '📍',
                    iconUrl: 'assets/category-icons/location.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Approximate location',
                                'Precise location'
                            ],
                            purpose: 'App functionality, Analytics, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'Approximate location',
                                'Precise location (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance'
                        }
                    }
                },
                {
                    id: 'messages',
                    name: 'Messages',
                    icon: '💬',
                    iconUrl: 'assets/category-icons/messages.png',
                    status: {
                        shared: false,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [],
                            purpose: null
                        },
                        collected: {
                            items: ['Other in-app messages (optional)'],
                            purpose: 'App functionality, Developer communications, Account management'
                        }
                    }
                },
                {
                    id: 'app-activity',
                    name: 'App Activity',
                    icon: '📊',
                    iconUrl: 'assets/category-icons/activity.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'App interactions',
                                'In-app search history'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing'
                        },
                        collected: {
                            items: [
                                'App interactions',
                                'In-app search history',
                                'Other actions (optional)'
                            ],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Personalization'
                        }
                    }
                },
                {
                    id: 'financial-info',
                    name: 'Financial Info',
                    icon: '💳',
                    iconUrl: 'assets/category-icons/financial.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'User payment info',
                                'Purchase history'
                            ],
                            purpose: 'App functionality, Advertising or marketing, Fraud prevention, security, and compliance'
                        },
                        collected: {
                            items: [
                                'User payment info (optional)',
                                'Purchase history'
                            ],
                            purpose: 'App functionality, Analytics, Advertising or marketing, Fraud prevention, security, and compliance, Personalization, Account management'
                        }
                    }
                },
                {
                    id: 'device-info',
                    name: 'Device or other IDs',
                    icon: '📱',
                    iconUrl: 'assets/category-icons/device.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: ['Device or other IDs'],
                            purpose: 'Advertising or marketing, Personalization'
                        },
                        collected: {
                            items: ['Device or other IDs'],
                            purpose: 'App functionality, Analytics, Developer communications, Advertising or marketing, Fraud prevention, security, and compliance, Personalization'
                        }
                    }
                },
                {
                    id: 'app-performance',
                    name: 'App Info and Performance',
                    icon: '⚡',
                    iconUrl: 'assets/category-icons/performance.png',
                    status: {
                        shared: true,
                        collected: true
                    },
                    details: {
                        shared: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        },
                        collected: {
                            items: [
                                'Crash logs',
                                'Diagnostics',
                                'Other app performance data'
                            ],
                            purpose: 'Analytics'
                        }
                    }
                }
            ],
            
            securityPractices: {
                dataEncryptedInTransit: true,
                dataCanBeDeleted: true
            }
        }
    }

    // ============================================
    // ADD MORE APPS HERE!
    // ============================================
    // Just copy one of the examples above and modify it
    // Make sure to add a comma after each app object (except the last one)
    
];
/**
 * QUICK CHECKLIST:
 * 
 * ✓ Save your app icons in: assets/app-icons/
 * ✓ Save category icons in: assets/category-icons/
 * ✓ Save screenshots in: assets/screenshots/
 * ✓ Update the iconUrl paths in this file
 * ✓ Fill in your app data
 * ✓ Make sure each app has a unique 'id'
 * ✓ Don't forget commas between objects!
 * 
 * TIPS:
 * - If you don't have custom icons, just delete the iconUrl line - emojis will be used
 * - If you don't have screenshots, delete the screenshots array - gradients will be used
 * - Copy and paste the example structure for each new app
 * - Test by opening index.html in your browser
 */
