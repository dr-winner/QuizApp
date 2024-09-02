// An array passing the questions

let questions = [
    {
        QuestionNumber: 1,
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
        optionlist: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
            "Central Peripheral Unit"
        ]
    },
    {
        QuestionNumber: 2,
        question: "Which of the following is not an operating system?",
        answer: "Mozilla",
        optionlist: [
            "Windows",
            "macOS",
            "Linux",
            "Mozilla"
        ]
    },
    {
        QuestionNumber: 3,
        question: "What does RAM stand for?",
        answer: "Random Access Memory",
        optionlist: [
            "Random Access Memory",
            "Read Access Memory",
            "Random Allocation Memory",
            "Readily Available Memory"
        ]
    },
    {
        QuestionNumber: 4,
        question: "Which of these is a web browser?",
        answer: "Google Chrome",
        optionlist: [
            "Microsoft Word",
            "Google Chrome",
            "Adobe Photoshop",
            "Skype"
        ]
    },
    {
        QuestionNumber: 5,
        question: "What does URL stand for?",
        answer: "Uniform Resource Locator",
        optionlist: [
            "Universal Resource Locator",
            "Uniform Resource Locator",
            "Unified Resource Locator",
            "Unique Resource Locator"
        ]
    },
    {
        QuestionNumber: 6,
        question: "Which of these is not a programming language?",
        answer: "Photoshop",
        optionlist: [
            "Python",
            "Java",
            "HTML",
            "Photoshop"
        ]
    },
    {
        QuestionNumber: 7,
        question: "What does LAN stand for?",
        answer: "Local Area Network",
        optionlist: [
            "Local Area Network",
            "Large Area Network",
            "Long Access Network",
            "Logical Application Network"
        ]
    },
    {
        QuestionNumber: 8,
        question: "Which company developed the Windows operating system?",
        answer: "Microsoft",
        optionlist: [
            "Apple",
            "Microsoft",
            "Google",
            "IBM"
        ]
    },
    {
        QuestionNumber: 9,
        question: "What does PDF stand for?",
        answer: "Portable Document Format",
        optionlist: [
            "Portable Document Format",
            "Personal Document File",
            "Printed Document Format",
            "Public Document File"
        ]
    },
    {
        QuestionNumber: 10,
        question: "Which of these is not a type of computer storage?",
        answer: "Central Processing Unit",
        optionlist: [
            "Hard Disk Drive",
            "Solid State Drive",
            "Random Access Memory",
            "Central Processing Unit"
        ]
    },
    {
        QuestionNumber: 11,
        question: "What does Wi-Fi stand for?",
        answer: "Wireless Fidelity",
        optionlist: [
            "Wireless Fidelity",
            "Wide Fidelity",
            "Wireless Fiber",
            "Wide Fiber"
        ]
    },
    {
        QuestionNumber: 12,
        question: "Which of these is not an input device?",
        answer: "Monitor",
        optionlist: [
            "Keyboard",
            "Mouse",
            "Monitor",
            "Microphone"
        ]
    },
    {
        QuestionNumber: 13,
        question: "What is the purpose of an antivirus software?",
        answer: "To protect against malicious software",
        optionlist: [
            "To speed up the computer",
            "To protect against malicious software",
            "To improve internet connection",
            "To organize files"
        ]
    },
    {
        QuestionNumber: 14,
        question: "What does GUI stand for?",
        answer: "Graphical User Interface",
        optionlist: [
            "Graphical User Interface",
            "General User Input",
            "Graphical Unified Input",
            "General User Interface"
        ]
    },
    {
        QuestionNumber: 15,
        question: "Which of these is not a cloud storage service?",
        answer: "Microsoft Word",
        optionlist: [
            "Dropbox",
            "Google Drive",
            "iCloud",
            "Microsoft Word"
        ]
    },
    {
        QuestionNumber: 16,
        question: "What does HTTP stand for?",
        answer: "Hypertext Transfer Protocol",
        optionlist: [
            "Hypertext Transfer Protocol",
            "Hypertext Transmission Protocol",
            "Hypertext Terminal Protocol",
            "Hypertext Transport Protocol"
        ]
    },
    {
        QuestionNumber: 17,
        question: "Which of these is not a type of network topology?",
        answer: "Triangle",
        optionlist: [
            "Star",
            "Ring",
            "Bus",
            "Triangle"
        ]
    },
    {
        QuestionNumber: 18,
        question: "What is the function of a firewall?",
        answer: "To protect against unauthorized access",
        optionlist: [
            "To cool down the computer",
            "To protect against unauthorized access",
            "To increase internet speed",
            "To store data"
        ]
    },
    {
        QuestionNumber: 19,
        question: "Which of these is not a type of malware?",
        answer: "Hardware",
        optionlist: [
            "Virus",
            "Trojan",
            "Spyware",
            "Hardware"
        ]
    },
    {
        QuestionNumber: 20,
        question: "What does VPN stand for?",
        answer: "Virtual Private Network",
        optionlist: [
            "Virtual Private Network",
            "Very Personal Network",
            "Virtual Public Network",
            "Visible Private Network"
        ]
    },
    {
        QuestionNumber: 21,
        question: "Which of these is not a type of printer?",
        answer: "Bluetooth",
        optionlist: [
            "Inkjet",
            "Laser",
            "Dot matrix",
            "Bluetooth"
        ]
    },
    {
        QuestionNumber: 22,
        question: "What is the purpose of a CAPTCHA?",
        answer: "To verify that the user is human",
        optionlist: [
            "To improve website design",
            "To verify that the user is human",
            "To increase website loading speed",
            "To compress images"
        ]
    },
    {
        QuestionNumber: 23,
        question: "Which of these is not a type of database?",
        answer: "Spreadsheet",
        optionlist: [
            "Relational",
            "NoSQL",
            "Object-oriented",
            "Spreadsheet"
        ]
    },
    {
        QuestionNumber: 24,
        question: "What does BIOS stand for?",
        answer: "Basic Input/Output System",
        optionlist: [
            "Basic Input/Output System",
            "Binary Input/Output System",
            "Basic Internal Operating System",
            "Binary Internal Operating System"
        ]
    },
    {
        QuestionNumber: 25,
        question: "Which of these is not a type of computer port?",
        answer: "Bluetooth",
        optionlist: [
            "USB",
            "HDMI",
            "Ethernet",
            "Bluetooth"
        ]
    },
    {
        QuestionNumber: 26,
        question: "What is the purpose of a proxy server?",
        answer: "To act as an intermediary between clients and servers",
        optionlist: [
            "To increase internet speed",
            "To act as an intermediary between clients and servers",
            "To store website data",
            "To compress files"
        ]
    },
    {
        QuestionNumber: 27,
        question: "Which of these is not a type of computer memory?",
        answer: "BIOS",
        optionlist: [
            "ROM",
            "RAM",
            "Cache",
            "BIOS"
        ]
    },
    {
        QuestionNumber: 28,
        question: "What does ISP stand for?",
        answer: "Internet Service Provider",
        optionlist: [
            "Internet Service Provider",
            "Internet Security Protocol",
            "Internal Service Provider",
            "Internet Speed Processor"
        ]
    },
    {
        QuestionNumber: 29,
        question: "Which of these is not a type of software license?",
        answer: "Hardware",
        optionlist: [
            "Proprietary",
            "Open source",
            "Freeware",
            "Hardware"
        ]
    },
    {
        QuestionNumber: 30,
        question: "What is the purpose of an IP address?",
        answer: "To identify a device on a network",
        optionlist: [
            "To identify a device on a network",
            "To increase internet speed",
            "To compress files",
            "To protect against viruses"
        ]
    },
    {
        QuestionNumber: 31,
        question: "Which of these is not a type of computer file system?",
        answer: "JPEG",
        optionlist: [
            "FAT32",
            "NTFS",
            "exFAT",
            "JPEG"
        ]
    },
    {
        QuestionNumber: 32,
        question: "What does DNS stand for?",
        answer: "Domain Name System",
        optionlist: [
            "Domain Name System",
            "Dynamic Network Service",
            "Digital Naming Service",
            "Data Network System"
        ]
    },
    {
        QuestionNumber: 33,
        question: "Which of these is not a type of computer monitor?",
        answer: "SSD",
        optionlist: [
            "LCD",
            "LED",
            "CRT",
            "SSD"
        ]
    },
    {
        QuestionNumber: 34,
        question: "What is the purpose of a UPS in computing?",
        answer: "To provide temporary power during an outage",
        optionlist: [
            "To provide temporary power during an outage",
            "To increase internet speed",
            "To protect against viruses",
            "To compress files"
        ]
    },
    {
        QuestionNumber: 35,
        question: "Which of these is not a type of computer cable?",
        answer: "CPU",
        optionlist: [
            "HDMI",
            "VGA",
            "DVI",
            "CPU"
        ]
    },
    {
        QuestionNumber: 36,
        question: "What does FTP stand for?",
        answer: "File Transfer Protocol",
        optionlist: [
            "File Transfer Protocol",
            "Fast Transfer Protocol",
            "File Transmission Process",
            "Fast Transmission Process"
        ]
    },
    {
        QuestionNumber: 37,
        question: "Which of these is not a type of computer network?",
        answer: "SAN",
        optionlist: [
            "LAN",
            "WAN",
            "MAN",
            "SAN"
        ]
    },
    {
        QuestionNumber: 38,
        question: "What is the purpose of a cooling fan in a computer?",
        answer: "To prevent overheating",
        optionlist: [
            "To reduce noise",
            "To increase processing speed",
            "To prevent overheating",
            "To improve Wi-Fi signal"
        ]
    },
    {
        QuestionNumber: 39,
        question: "Which of these is not a type of computer virus?",
        answer: "Gigabyte virus",
        optionlist: [
            "Boot sector virus",
            "Macro virus",
            "Polymorphic virus",
            "Gigabyte virus"
        ]
    },
    {
        QuestionNumber: 40,
        question: "What does ASCII stand for?",
        answer: "American Standard Code for Information Interchange",
        optionlist: [
            "American Standard Code for Information Interchange",
            "Advanced System Code for Internet Information",
            "Automated Sequence Code for Information Input",
            "American Security Code for Information Infrastructure"
        ]
    },
    {
        QuestionNumber: 41,
        question: "Which of these is not a type of computer keyboard?",
        answer: "BINARY",
        optionlist: [
            "QWERTY",
            "AZERTY",
            "DVORAK",
            "BINARY"
        ]
    },
    {
        QuestionNumber: 42,
        question: "What is the purpose of a GPU in a computer?",
        answer: "To process graphics and video",
        optionlist: [
            "To process graphics and video",
            "To store data",
            "To connect to the internet",
            "To run the operating system"
        ]
    },
    {
        QuestionNumber: 43,
        question: "Which of these is not a type of computer port?",
        answer: "Bluetooth",
        optionlist: [
            "Thunderbolt",
            "FireWire",
            "eSATA",
            "Bluetooth"
        ]
    },
    {
        QuestionNumber: 44,
        question: "What does RAID stand for in computing?",
        answer: "Redundant Array of Independent Disks",
        optionlist: [
            "Redundant Array of Independent Disks",
            "Random Access Input Device",
            "Remote Access and Internet Database",
            "Rapid Application and Interface Development"
        ]
    },
    {
        QuestionNumber: 45,
        question: "Which of these is not a type of computer mouse?",
        answer: "Wireless",
        optionlist: [
            "Optical",
            "Mechanical",
            "Trackball",
            "Wireless"
        ]
    },
    {
        QuestionNumber: 46,
        question: "What is the purpose of a NIC in a computer?",
        answer: "To connect to a network",
        optionlist: [
            "To connect to a network",
            "To process graphics",
            "To store data",
            "To cool the system"
        ]
    },
    {
        QuestionNumber: 47,
        question: "Which of these is not a type of computer display technology?",
        answer: "SSD",
        optionlist: [
            "OLED",
            "IPS",
            "TN",
            "SSD"
        ]
    },
    {
        QuestionNumber: 48,
        question: "What does SSH stand for?",
        answer: "Secure Shell",
        optionlist: [
            "Secure Shell",
            "System Security Host",
            "Secure System Hierarchy",
            "Server Shell Host"
        ]
    },
    {
        QuestionNumber: 49,
        question: "Which of these is not a type of computer backup?",
        answer: "Partial backup",
        optionlist: [
            "Full backup",
            "Incremental backup",
            "Differential backup",
            "Partial backup"
        ]
    },
    {
        QuestionNumber: 50,
        question: "What is the purpose of a CMOS battery in a computer?",
        answer: "To maintain system settings when the computer is off",
        optionlist: [
            "To maintain system settings when the computer is off",
            "To power the CPU",
            "To boost Wi-Fi signal",
            "To protect against power surges"
        ]
    }
]