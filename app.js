// Sample data for Malaysian VITABox cold chain - INCOMING TO PENANG
        const coldBoxData = {
            'MY-2025-093': {
                id: 'MY-2025-093',
                boxId: 'MCB-4421',
                route: 'Kuala Lumpur â†’ Penang',
                origin: 'Kuala Lumpur Central Hub',
                startTime: '2025-09-28 08:00 MYT',
                arrivalTime: '2025-09-28 14:30 MYT',
                currentTemp: 6.2,
                status: 'PASS',
                vaccine: 'COVID-19 mRNA Vaccines',
                batchNumber: 'COV2025-KL-093',
                expiryDate: '2025-06-15',
                manufacturer: 'Pfizer-BioNTech',
                doses: 5000,
                minTemp: 2.1,
                maxTemp: 7.8,
                avgTemp: 5.4,
                timeInRange: 98.2,
                timeOutRange: 1.8,
                excursions: 0,
                loggerBattery: 78,
                dockBay: 'A3',
                calibrationDate: 'Mar 2025',
                temperatureData: [
                    {time: '08:00', temp: 4.2},
                    {time: '09:00', temp: 5.8},
                    {time: '10:00', temp: 6.9},
                    {time: '11:00', temp: 6.2},
                    {time: '12:00', temp: 5.8},
                    {time: '13:00', temp: 6.1},
                    {time: '14:30', temp: 6.2}
                ]
            },
            'MY-2025-094': {
                id: 'MY-2025-094',
                boxId: 'MCB-4422',
                route: 'Ipoh â†’ Penang',
                origin: 'Ipoh Regional Hub',
                startTime: '2025-09-28 10:15 MYT',
                arrivalTime: '2025-09-28 12:45 MYT',
                currentTemp: 5.2,
                status: 'PASS',
                vaccine: 'Influenza Vaccines (Quadrivalent)',
                batchNumber: 'FLU2025-IP-094',
                expiryDate: '2025-12-31',
                manufacturer: 'Sanofi Pasteur',
                doses: 3200,
                minTemp: 3.1,
                maxTemp: 7.2,
                avgTemp: 5.1,
                timeInRange: 100,
                timeOutRange: 0,
                excursions: 0,
                loggerBattery: 92,
                dockBay: 'B1',
                temperatureData: [
                    {time: '10:15', temp: 4.1},
                    {time: '11:00', temp: 5.8},
                    {time: '12:00', temp: 6.2},
                    {time: '12:45', temp: 5.2}
                ]
            },
            'MY-2025-095': {
                id: 'MY-2025-095',
                boxId: 'MCB-4423',
                route: 'Johor Bahru â†’ Penang',
                origin: 'Johor Bahru Distribution',
                startTime: '2025-09-28 06:30 MYT',
                arrivalTime: '2025-09-28 15:20 MYT',
                currentTemp: 4.8,
                status: 'PASS',
                vaccine: 'Hepatitis B Vaccines',
                batchNumber: 'HBV2025-JB-095',
                expiryDate: '2025-08-20',
                manufacturer: 'GSK',
                doses: 2800,
                loggerBattery: 85,
                dockBay: 'A1',
                temperatureData: [
                    {time: '06:30', temp: 4.8},
                    {time: '08:00', temp: 5.2},
                    {time: '10:00', temp: 5.8},
                    {time: '12:00', temp: 6.1},
                    {time: '14:00', temp: 5.4},
                    {time: '15:20', temp: 4.8}
                ]
            },
            'MY-2025-096': {
                id: 'MY-2025-096',
                boxId: 'MCB-4424',
                route: 'Kuching â†’ Penang',
                origin: 'Kuching Medical Hub',
                startTime: '2025-09-28 05:00 MYT',
                arrivalTime: '2025-09-28 16:15 MYT',
                currentTemp: 4.3,
                status: 'PASS',
                vaccine: 'HPV Vaccines (Gardasil 9)',
                batchNumber: 'HPV2025-KC-096',
                expiryDate: '2025-09-10',
                manufacturer: 'Merck & Co',
                doses: 1500,
                loggerBattery: 67,
                dockBay: 'C2',
                temperatureData: [
                    {time: '05:00', temp: 3.8},
                    {time: '08:00', temp: 4.5},
                    {time: '12:00', temp: 5.1},
                    {time: '16:15', temp: 4.3}
                ]
            },
            'MY-2025-097': {
                id: 'MY-2025-097',
                boxId: 'MCB-4425',
                route: 'Singapore â†’ Penang',
                origin: 'Singapore Medical Port',
                startTime: '2025-09-28 07:45 MYT',
                arrivalTime: '2025-09-28 17:30 MYT',
                currentTemp: 9.2,
                status: 'FAIL',
                vaccine: 'MMR Vaccines (Triple Antigen)',
                batchNumber: 'MMR2025-SG-097',
                expiryDate: '2025-04-30',
                manufacturer: 'Merck & Co',
                doses: 2200,
                loggerBattery: 45,
                dockBay: 'B3',
                temperatureData: [
                    {time: '07:45', temp: 5.2},
                    {time: '10:30', temp: 6.8},
                    {time: '14:15', temp: 8.9},
                    {time: '17:30', temp: 9.2}
                ]
            }
        };

        // VITABox Storage/Inventory Data for Penang Hub
        const coldBoxStorage = {
            // Available boxes (ready for use)
            'MCB-4401': { id: 'MCB-4401', status: 'available', lastShipment: 'PG-OUT-024', currentShipment: null, reuseCycles: 87, lastUsed: '2025-09-27', nextMaintenance: '2025-10-15', location: 'Bay-A1', condition: 'Excellent', notes: 'High-performance veteran box' },
            'MCB-4402': { id: 'MCB-4402', status: 'available', lastShipment: 'PG-OUT-025', currentShipment: null, reuseCycles: 76, lastUsed: '2025-09-26', nextMaintenance: '2025-10-20', location: 'Bay-A2', condition: 'Good', notes: 'Reliable performance' },
            'MCB-4403': { id: 'MCB-4403', status: 'available', lastShipment: 'PG-OUT-026', currentShipment: null, reuseCycles: 81, lastUsed: '2025-09-25', nextMaintenance: '2025-10-18', location: 'Bay-A3', condition: 'Excellent', notes: 'Sustainability champion' },
            'MCB-4404': { id: 'MCB-4404', status: 'available', lastShipment: 'PG-OUT-014', currentShipment: null, reuseCycles: 45, lastUsed: '2025-01-10', nextMaintenance: '2025-03-01', location: 'Bay-A4', condition: 'Good', notes: 'Recently serviced' },
            'MCB-4405': { id: 'MCB-4405', status: 'available', lastShipment: 'PG-OUT-015', currentShipment: null, reuseCycles: 52, lastUsed: '2025-01-09', nextMaintenance: '2025-02-25', location: 'Bay-A5', condition: 'Good', notes: '' },
            'MCB-4406': { id: 'MCB-4406', status: 'available', lastShipment: 'PG-OUT-016', currentShipment: null, reuseCycles: 38, lastUsed: '2025-01-08', nextMaintenance: '2025-03-05', location: 'Bay-A6', condition: 'Good', notes: '' },
            'MCB-4407': { id: 'MCB-4407', status: 'available', lastShipment: 'PG-OUT-017', currentShipment: null, reuseCycles: 62, lastUsed: '2025-01-07', nextMaintenance: '2025-02-28', location: 'Bay-B1', condition: 'Good', notes: 'Due for calibration' },
            'MCB-4408': { id: 'MCB-4408', status: 'available', lastShipment: 'PG-OUT-018', currentShipment: null, reuseCycles: 41, lastUsed: '2025-01-06', nextMaintenance: '2025-03-10', location: 'Bay-B2', condition: 'Excellent', notes: '' },
            'MCB-4409': { id: 'MCB-4409', status: 'available', lastShipment: 'PG-OUT-027', currentShipment: null, reuseCycles: 29, lastUsed: '2025-01-05', nextMaintenance: '2025-03-15', location: 'Bay-B3', condition: 'Good', notes: 'New addition to fleet' },
            'MCB-4410': { id: 'MCB-4410', status: 'available', lastShipment: 'PG-OUT-028', currentShipment: null, reuseCycles: 33, lastUsed: '2025-01-04', nextMaintenance: '2025-03-12', location: 'Bay-B4', condition: 'Good', notes: '' },
            
            // Validating boxes (being checked after return)
            'MCB-4411': { id: 'MCB-4411', status: 'validating', lastShipment: 'PG-OUT-019', currentShipment: null, reuseCycles: 58, lastUsed: '2025-01-15', nextMaintenance: '2025-02-22', location: 'Validation-1', condition: 'Checking', notes: 'Returned today - temp validation' },
            'MCB-4412': { id: 'MCB-4412', status: 'validating', lastShipment: 'PG-OUT-020', currentShipment: null, reuseCycles: 44, lastUsed: '2025-01-15', nextMaintenance: '2025-03-08', location: 'Validation-2', condition: 'Checking', notes: 'Returned today - integrity check' },
            'MCB-4413': { id: 'MCB-4413', status: 'validating', lastShipment: 'PG-OUT-021', currentShipment: null, reuseCycles: 39, lastUsed: '2025-01-14', nextMaintenance: '2025-03-18', location: 'Validation-3', condition: 'Checking', notes: 'Long route return - full inspection' },
            'MCB-4414': { id: 'MCB-4414', status: 'validating', lastShipment: 'PG-OUT-022', currentShipment: null, reuseCycles: 51, lastUsed: '2025-01-14', nextMaintenance: '2025-02-26', location: 'Validation-4', condition: 'Checking', notes: 'Air transport return - checking' },
            'MCB-4415': { id: 'MCB-4415', status: 'validating', lastShipment: 'PG-OUT-023', currentShipment: null, reuseCycles: 67, lastUsed: '2025-01-14', nextMaintenance: '2025-02-12', location: 'Validation-5', condition: 'Checking', notes: 'High-cycle box - thorough check' },
            'MCB-4416': { id: 'MCB-4416', status: 'validating', lastShipment: 'PG-OUT-029', currentShipment: null, reuseCycles: 25, lastUsed: '2025-01-13', nextMaintenance: '2025-03-25', location: 'Validation-6', condition: 'Checking', notes: 'Routine post-trip validation' },
            'MCB-4417': { id: 'MCB-4417', status: 'validating', lastShipment: 'PG-OUT-030', currentShipment: null, reuseCycles: 35, lastUsed: '2025-01-13', nextMaintenance: '2025-03-20', location: 'Validation-7', condition: 'Checking', notes: 'Door seal inspection needed' },
            'MCB-4418': { id: 'MCB-4418', status: 'validating', lastShipment: 'PG-OUT-031', currentShipment: null, reuseCycles: 42, lastUsed: '2025-01-12', nextMaintenance: '2025-03-02', location: 'Validation-8', condition: 'Checking', notes: 'Temperature logger calibration' },

            // Currently in use boxes
            'MCB-4421': { id: 'MCB-4421', status: 'in-use', lastShipment: 'PG-OUT-032', currentShipment: 'PG-OUT-001', reuseCycles: 23, lastUsed: '2025-01-15', nextMaintenance: '2025-04-01', location: 'En-Route', condition: 'Active', notes: 'KL route - active shipment' },
            'MCB-4422': { id: 'MCB-4422', status: 'in-use', lastShipment: 'PG-OUT-033', currentShipment: 'PG-OUT-002', reuseCycles: 31, lastUsed: '2025-01-15', nextMaintenance: '2025-03-28', location: 'En-Route', condition: 'Active', notes: 'Ipoh route - delivered' },
            'MCB-4423': { id: 'MCB-4423', status: 'in-use', lastShipment: 'PG-OUT-034', currentShipment: 'PG-OUT-003', reuseCycles: 19, lastUsed: '2025-01-15', nextMaintenance: '2025-04-10', location: 'En-Route', condition: 'Active', notes: 'Melaka route - in transit' },
            'MCB-4424': { id: 'MCB-4424', status: 'in-use', lastShipment: 'PG-OUT-035', currentShipment: 'PG-OUT-004', reuseCycles: 55, lastUsed: '2025-01-15', nextMaintenance: '2025-02-28', location: 'En-Route', condition: 'Active', notes: 'Kuantan route - active' },
            'MCB-4425': { id: 'MCB-4425', status: 'in-use', lastShipment: 'PG-OUT-036', currentShipment: 'PG-OUT-005', reuseCycles: 48, lastUsed: '2025-01-15', nextMaintenance: '2025-03-05', location: 'En-Route', condition: 'Active', notes: 'Kuching flight - active' },
            'MCB-4426': { id: 'MCB-4426', status: 'in-use', lastShipment: 'PG-OUT-037', currentShipment: 'PG-OUT-006', reuseCycles: 37, lastUsed: '2025-01-15', nextMaintenance: '2025-03-15', location: 'En-Route', condition: 'Active', notes: 'Sandakan flight - active' },
            'MCB-4427': { id: 'MCB-4427', status: 'in-use', lastShipment: 'PG-OUT-038', currentShipment: 'PG-OUT-007', reuseCycles: 64, lastUsed: '2025-01-15', nextMaintenance: '2025-02-18', location: 'En-Route', condition: 'Active', notes: 'Singapore route - active' },
            'MCB-4428': { id: 'MCB-4428', status: 'in-use', lastShipment: 'PG-OUT-039', currentShipment: 'PG-OUT-008', reuseCycles: 72, lastUsed: '2025-01-15', nextMaintenance: '2025-02-10', location: 'En-Route', condition: 'Active', notes: 'Bangkok route - border crossing' },
            'MCB-4429': { id: 'MCB-4429', status: 'in-use', lastShipment: 'PG-OUT-040', currentShipment: 'PG-OUT-009', reuseCycles: 41, lastUsed: '2025-01-15', nextMaintenance: '2025-03-08', location: 'En-Route', condition: 'Warning', notes: 'JB route - temp warning' },
            'MCB-4430': { id: 'MCB-4430', status: 'in-use', lastShipment: 'PG-OUT-041', currentShipment: 'PG-OUT-010', reuseCycles: 36, lastUsed: '2025-01-15', nextMaintenance: '2025-03-18', location: 'En-Route', condition: 'Warning', notes: 'Miri flight - temp warning' },
            'MCB-4431': { id: 'MCB-4431', status: 'in-use', lastShipment: 'PG-OUT-042', currentShipment: 'PG-OUT-011', reuseCycles: 28, lastUsed: '2025-01-15', nextMaintenance: '2025-03-25', location: 'En-Route', condition: 'Warning', notes: 'Hat Yai route - customs delay' },
            'MCB-4432': { id: 'MCB-4432', status: 'in-use', lastShipment: 'PG-OUT-043', currentShipment: 'PG-OUT-012', reuseCycles: 59, lastUsed: '2025-01-15', nextMaintenance: '2025-02-25', location: 'En-Route', condition: 'Alert', notes: 'KK flight - critical temp alert' },

            // Recently returned boxes
            'MCB-4433': { id: 'MCB-4433', status: 'returned', lastShipment: 'PG-OUT-044', currentShipment: null, reuseCycles: 74, lastUsed: '2025-01-15', nextMaintenance: '2025-02-08', location: 'Returned-Bay', condition: 'Awaiting', notes: 'Just returned - awaiting processing' },
            'MCB-4434': { id: 'MCB-4434', status: 'returned', lastShipment: 'PG-OUT-045', currentShipment: null, reuseCycles: 46, lastUsed: '2025-01-15', nextMaintenance: '2025-03-01', location: 'Returned-Bay', condition: 'Awaiting', notes: 'Successful delivery completed' },
            'MCB-4435': { id: 'MCB-4435', status: 'returned', lastShipment: 'PG-OUT-046', currentShipment: null, reuseCycles: 53, lastUsed: '2025-01-14', nextMaintenance: '2025-02-28', location: 'Returned-Bay', condition: 'Awaiting', notes: 'Long-haul return completed' },

            // Re-sterilising boxes
            'MCB-4436': { id: 'MCB-4436', status: 're-sterilising', lastShipment: 'PG-OUT-047', currentShipment: null, reuseCycles: 83, lastUsed: '2025-01-13', nextMaintenance: '2025-02-05', location: 'Sterilisation-1', condition: 'Cleaning', notes: 'High-cycle box - deep cleaning cycle' },
            'MCB-4437': { id: 'MCB-4437', status: 're-sterilising', lastShipment: 'PG-OUT-048', currentShipment: null, reuseCycles: 69, lastUsed: '2025-01-13', nextMaintenance: '2025-02-15', location: 'Sterilisation-2', condition: 'Cleaning', notes: 'Routine deep sterilisation' },

            // Not available (maintenance/repair)
            'MCB-4438': { id: 'MCB-4438', status: 'not-available', lastShipment: 'PG-OUT-049', currentShipment: null, reuseCycles: 91, lastUsed: '2025-01-10', nextMaintenance: '2025-01-20', location: 'Maintenance-1', condition: 'Repair', notes: 'Door seal replacement needed' },
            'MCB-4439': { id: 'MCB-4439', status: 'not-available', lastShipment: 'PG-OUT-050', currentShipment: null, reuseCycles: 78, lastUsed: '2025-01-09', nextMaintenance: '2025-01-25', location: 'Maintenance-2', condition: 'Repair', notes: 'Temperature sensor calibration' },
            'MCB-4440': { id: 'MCB-4440', status: 'not-available', lastShipment: 'PG-OUT-051', currentShipment: null, reuseCycles: 65, lastUsed: '2025-01-08', nextMaintenance: '2025-01-30', location: 'Maintenance-3', condition: 'Repair', notes: 'Insulation integrity check' },
            'MCB-4441': { id: 'MCB-4441', status: 'not-available', lastShipment: 'PG-OUT-052', currentShipment: null, reuseCycles: 49, lastUsed: '2025-01-07', nextMaintenance: '2025-02-01', location: 'Maintenance-4', condition: 'Repair', notes: 'Battery replacement required' },
            'MCB-4442': { id: 'MCB-4442', status: 'not-available', lastShipment: 'PG-OUT-053', currentShipment: null, reuseCycles: 32, lastUsed: '2025-01-06', nextMaintenance: '2025-02-05', location: 'Maintenance-5', condition: 'Repair', notes: 'Lock mechanism repair' }
        };

        let selectedColdBoxes = new Set();
        let bluetoothEnabled = false;
        let interactiveMap = null;
        let currentMapView = 'streets'; // 'streets' or 'satellite'
        let tempSelectedBoxes = new Set(); // For dock multi-select
        let notificationCount = 0;
        
        // Global Search Functionality
        function performGlobalSearch(query) {
            const searchResults = document.getElementById('searchResults');
            const searchContent = document.getElementById('searchContent');
            
            if (!query.trim()) {
                searchResults.style.display = 'none';
                return;
            }
            
            const results = [];
            query = query.toLowerCase();
            
            // Search through VITABox data
            Object.values(coldBoxData).forEach(box => {
                if (box.id.toLowerCase().includes(query) || 
                    box.vaccine.toLowerCase().includes(query) ||
                    box.batchNumber?.toLowerCase().includes(query) ||
                    box.route.toLowerCase().includes(query) ||
                    box.origin.toLowerCase().includes(query)) {
                    results.push({
                        type: 'Incoming Vaccine',
                        id: box.id,
                        vaccine: box.vaccine,
                        route: box.route,
                        temp: box.currentTemp,
                        status: box.status,
                        action: () => showColdBoxDetails(box.id)
                    });
                }
            });
            
            // Search through cold chain locations
            coldChainLocations.forEach(location => {
                if (location.name.toLowerCase().includes(query) ||
                    location.id.toLowerCase().includes(query)) {
                    results.push({
                        type: 'Location',
                        id: location.id,
                        name: location.name,
                        status: location.status,
                        temp: location.temp,
                        action: () => viewOutboundShipment(location.id)
                    });
                }
            });
            
            // Search through VITABox storage
            Object.values(coldBoxStorage).forEach(box => {
                if (box.id.toLowerCase().includes(query) ||
                    box.lastShipment?.toLowerCase().includes(query) ||
                    box.currentShipment?.toLowerCase().includes(query) ||
                    box.notes.toLowerCase().includes(query) ||
                    box.location.toLowerCase().includes(query)) {
                    results.push({
                        type: 'VITABox',
                        id: box.id,
                        status: box.status,
                        location: box.location,
                        cycles: box.reuseCycles,
                        action: () => { showPageDirectly('cold-storage'); showBoxDetails(box.id); }
                    });
                }
            });
            
            if (results.length === 0) {
                searchContent.innerHTML = '<div style="color: #666; text-align: center; padding: 20px;">No results found for "' + query + '"</div>';
            } else {
                searchContent.innerHTML = results.map(result => `
                    <div class="search-result-item" onclick="result.action(); clearSearch();">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong>${result.type}: ${result.id || result.name}</strong><br>
                                <small>${result.vaccine || result.name || result.location} â€¢ ${result.route || result.type}</small>
                            </div>
                            <div style="text-align: right;">
                                ${result.temp ? 
                                    `<span style="color: ${result.temp > 8 ? '#e53e3e' : '#5FA684'};">${result.temp}Â°C</span><br>` : 
                                    result.cycles ? 
                                        `<span style="color: #5FA684;">${result.cycles} cycles</span><br>` : 
                                        ''
                                }
                                <span class="status-badge status-${result.status?.toLowerCase()}">${result.status}</span>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            
            searchResults.style.display = 'block';
        }
        
        function clearSearch() {
            document.getElementById('globalSearch').value = '';
            document.getElementById('searchResults').style.display = 'none';
        }
        
        // Enhanced Notification System
        function showNotification(message, type = 'info', duration = 4000) {
            const panel = document.getElementById('notificationPanel');
            const notification = document.createElement('div');
            const id = 'notification-' + (++notificationCount);
            
            notification.id = id;
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div style="flex: 1;">
                        <div style="font-weight: bold; margin-bottom: 5px;">
                            ${type === 'alert' ? 'ðŸš¨' : type === 'warning' ? 'âš ï¸' : 'â„¹ï¸'} 
                            ${type.toUpperCase()}
                        </div>
                        <div>${message}</div>
                        <small style="color: #666; margin-top: 5px; display: block;">${new Date().toLocaleTimeString()}</small>
                    </div>
                    <button onclick="removeNotification('${id}')" style="background: none; border: none; font-size: 16px; cursor: pointer; color: #666;">Ã—</button>
                </div>
            `;
            
            notification.onclick = () => removeNotification(id);
            
            panel.appendChild(notification);
            
            // Auto remove
            setTimeout(() => removeNotification(id), duration);
            
            // Play sound for critical alerts
            if (type === 'alert') {
                playNotificationSound();
            }
        }
        
        function removeNotification(id) {
            const notification = document.getElementById(id);
            if (notification) {
                notification.style.animation = 'slideInRight 0.3s ease-out reverse';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }
        
        function playNotificationSound() {
            // Create audio context for notification sound
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.2);
            } catch (e) {
                console.log('Audio notification not available');
            }
        }
        
        // KPI Drill-down functionality
        function drillDownKPI(kpiType) {
            switch(kpiType) {
                case 'active-shipments':
                    showPageDirectly('outbound');
                    showNotification('Showing active VITABox shipments from Penang', 'info');
                    break;
                case 'alerts':
                    showPageDirectly('alerts');
                    showNotification('Showing temperature alerts and excursions', 'info');
                    break;
                case 'completed':
                    showPageDirectly('shipments');
                    showNotification('Showing completed shipments', 'info');
                    break;
                case 'esg-cycles':
                    showPageDirectly('cold-storage');
                    setTimeout(() => showESGVisualization(), 500);
                    showNotification('Showing ESG sustainability metrics', 'info');
                    break;
                default:
                    showNotification(`Analyzing ${kpiType} data...`, 'info');
            }
        }
        
        // Malaysian Cold Chain Locations Data
        const coldChainLocations = [
            // Malaysia - Peninsular
            { id: 'KL-001', name: 'Kuala Lumpur Central Hub', lat: 3.1390, lng: 101.6869, status: 'active', count: 4, temp: 5.2 },
            { id: 'PG-001', name: 'Penang VITABox Center', lat: 5.4164, lng: 100.3327, status: 'active', count: 2, temp: 4.8 },
            { id: 'JB-001', name: 'Johor Bahru Distribution', lat: 1.4927, lng: 103.7414, status: 'warning', count: 3, temp: 7.6 },
            { id: 'IP-001', name: 'Ipoh Regional Hub', lat: 4.5975, lng: 101.0901, status: 'active', count: 1, temp: 3.9 },
            { id: 'MLK-001', name: 'Melaka Storage Facility', lat: 2.1896, lng: 102.2501, status: 'active', count: 2, temp: 5.7 },
            { id: 'KT-001', name: 'Kuantan East Coast Hub', lat: 3.8077, lng: 103.3260, status: 'active', count: 1, temp: 4.3 },
            
            // Malaysia - East Malaysia
            { id: 'KCH-001', name: 'Kuching Medical Hub', lat: 1.5533, lng: 110.3592, status: 'active', count: 3, temp: 6.1 },
            { id: 'KK-001', name: 'Kota Kinabalu Center', lat: 5.9804, lng: 116.0735, status: 'alert', count: 2, temp: 9.2 },
            { id: 'MRI-001', name: 'Miri Northern Hub', lat: 4.3946, lng: 113.9932, status: 'warning', count: 1, temp: 7.8 },
            { id: 'SDK-001', name: 'Sandakan Facility', lat: 5.8402, lng: 118.1179, status: 'active', count: 1, temp: 4.7 },
            
            // Regional - Singapore & Thailand
            { id: 'SG-001', name: 'Singapore Medical Port', lat: 1.3521, lng: 103.8198, status: 'active', count: 3, temp: 5.4 },
            { id: 'BKK-001', name: 'Bangkok Distribution', lat: 13.7563, lng: 100.5018, status: 'active', count: 2, temp: 6.0 },
            { id: 'HDY-001', name: 'Hat Yai Border Hub', lat: 7.0103, lng: 100.4670, status: 'warning', count: 2, temp: 7.9 },
            { id: 'PKT-001', name: 'Phuket Medical Center', lat: 7.8804, lng: 98.3923, status: 'alert', count: 1, temp: 8.9 }
        ];

        // Navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Remove active from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Add active to selected nav item
            event.target.classList.add('active');
            
            // Update selected shipments table when switching to shipments page
            if (pageId === 'shipments') {
                updateSelectedShipmentsTable();
            }
            
            // Initialize storage table when switching to cold storage page
            if (pageId === 'cold-storage') {
                populateStorageTable();
            }
        }

        // Navigate to specific alert
        function navigateToAlert(alertId) {
            // Switch to alerts page
            showPageDirectly('alerts');
            
            // Highlight the specific alert
            setTimeout(() => {
                const targetAlert = document.getElementById(`alert-${alertId}`);
                if (targetAlert) {
                    // Remove any existing highlights
                    document.querySelectorAll('.alert').forEach(alert => {
                        alert.classList.remove('highlight');
                    });
                    
                    // Add highlight to target alert
                    targetAlert.classList.add('highlight');
                    
                    // Scroll to the alert
                    targetAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Remove highlight after animation
                    setTimeout(() => {
                        targetAlert.classList.remove('highlight');
                    }, 2000);
                }
            }, 100);
        }

        // Helper function to show page directly (without event context)
        function showPageDirectly(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Remove active from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Add active to corresponding nav item
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                if (item.onclick && item.onclick.toString().includes(pageId)) {
                    item.classList.add('active');
                }
            });
        }

        // Dock Scanner Toggle
        function toggleDockScanner() {
            const toggle = document.getElementById('bluetoothToggle');
            const status = document.getElementById('bluetoothStatus');
            const statusMessage = document.getElementById('statusMessage');
            const coldboxGrid = document.getElementById('coldbox-grid');
            const scanningText = document.getElementById('scanningText');
            
            bluetoothEnabled = !bluetoothEnabled;
            
            if (bluetoothEnabled) {
                toggle.classList.add('active');
                status.textContent = 'ON';
                status.style.color = '#5FA684';
                statusMessage.style.display = 'flex';
                coldboxGrid.innerHTML = '';
                
                // Phase 1: Initializing dock scanner
                scanningText.innerHTML = 'Initializing dock scanner system...';
                
                // Phase 2: Scanning dock
                setTimeout(() => {
                    scanningText.innerHTML = 'Scanning Penang dock for arrived VITABoxes...';
                }, 800);
                
                // Phase 3: Found shipments
                setTimeout(() => {
                    scanningText.innerHTML = 'Found 5 arrived shipments at dock!';
                }, 2500);
                
                // Phase 4: Show results
                setTimeout(() => {
                    statusMessage.innerHTML = `
                        <span style="color: #5FA684; font-size: 20px;">ðŸš¢</span>
                        <div>
                            <strong>Dock Scan Complete!</strong><br>
                            <small style="color: #2C677B;">5 VITABoxes arrived and ready for processing</small>
                        </div>
                    `;
                    displayArrivedColdBoxes();
                }, 3000);
                
            } else {
                toggle.classList.remove('active');
                status.textContent = 'OFF';
                status.style.color = '#2C677B';
                statusMessage.style.display = 'none';
                coldboxGrid.innerHTML = '';
            }
        }

        // Display Arrived VITABoxes at Penang Dock
        function displayArrivedColdBoxes() {
            const grid = document.getElementById('coldbox-grid');
            grid.innerHTML = '';
            
            Object.values(coldBoxData).forEach(box => {
                const isAlert = box.status === 'FAIL';
                const isInQueue = selectedColdBoxes.has(box.id);
                const isSelected = tempSelectedBoxes.has(box.id);
                
                const boxElement = document.createElement('div');
                boxElement.className = `coldbox-item ${isAlert ? 'temperature-alert' : ''} ${isSelected ? 'selected' : ''} ${isInQueue ? 'already-queued' : ''}`;
                boxElement.onclick = () => toggleBoxSelection(box.id);
                
                boxElement.innerHTML = `
                    <div class="selection-checkbox ${isSelected ? 'checked' : ''} ${isInQueue ? 'disabled' : ''}" style="position: absolute; top: 10px; left: 10px; ${isInQueue ? 'background: #ccc; border-color: #999;' : ''}">
                        ${isInQueue ? 'âœ“' : isSelected ? 'âœ“' : ''}
                    </div>
                    <div class="coldbox-header">
                        <div class="shipment-id">${box.id}</div>
                        <div class="temperature-display ${isAlert ? 'temp-alert' : 'temp-normal'}">
                            ðŸŒ¡ï¸ ${box.currentTemp}Â°C
                        </div>
                    </div>
                    <div class="coldbox-info">
                        <strong>From:</strong> ${box.origin}<br>
                        <strong>Route:</strong> ${box.route}<br>
                        <strong>Vaccine:</strong> ${box.vaccine}<br>
                        <strong>Batch:</strong> ${box.batchNumber}<br>
                        <strong>Doses:</strong> ${box.doses ? box.doses.toLocaleString() : 'N/A'}<br>
                        <strong>Expiry:</strong> ${box.expiryDate}<br>
                        <strong>Arrived:</strong> ${box.arrivalTime}<br>
                        <strong>Status:</strong> <span class="status-badge ${box.status === 'PASS' ? 'status-pass' : 'status-fail'}">${box.status}</span><br>
                        <strong>Logger Battery:</strong> ${box.loggerBattery}%
                    </div>
                `;
                
                grid.appendChild(boxElement);
            });
            
            updateSelectionUI();
        }

        // Toggle individual box selection for dock
        function toggleBoxSelection(boxId) {
            if (selectedColdBoxes.has(boxId)) {
                // Already in processing queue, do nothing
                return;
            }
            
            if (tempSelectedBoxes.has(boxId)) {
                tempSelectedBoxes.delete(boxId);
            } else {
                tempSelectedBoxes.add(boxId);
            }
            
            displayArrivedColdBoxes();
        }

        // Update selection UI
        function updateSelectionUI() {
            const panel = document.getElementById('main-action-panel');
            const countSpan = document.getElementById('selection-count');
            const addBtn = document.getElementById('main-add-btn');
            
            const selectedCount = tempSelectedBoxes.size;
            
            if (selectedCount > 0) {
                panel.style.display = 'block';
                countSpan.textContent = `${selectedCount} shipment${selectedCount > 1 ? 's' : ''} selected`;
                addBtn.disabled = false;
            } else {
                panel.style.display = 'none';
                addBtn.disabled = true;
            }
        }

        // Add selected shipments to processing queue
        function addSelectedToShipments() {
            if (tempSelectedBoxes.size === 0) return;
            
            const selectedBoxesList = Array.from(tempSelectedBoxes).map(boxId => {
                const box = coldBoxData[boxId];
                return `${box.id} (${box.vaccine})`;
            }).join('\n');
            
            const confirmDialog = confirm(
                `CONFIRM BATCH ADDITION\n\n` +
                `Add ${tempSelectedBoxes.size} shipments to processing queue?\n\n` +
                `Selected shipments:\n${selectedBoxesList}\n\n` +
                `These will be moved to "Selected Shipments" for detailed processing.`
            );
            
            if (confirmDialog) {
                // Add all selected to the main queue
                tempSelectedBoxes.forEach(boxId => {
                    selectedColdBoxes.add(boxId);
                });
                
                // Clear temporary selection
                tempSelectedBoxes.clear();
                
                // Refresh display
                displayArrivedColdBoxes();
                updateSelectedShipmentsTable();
                
                // Show success notification
                showNotification(`âœ… ${selectedColdBoxes.size} shipments added to processing queue!`, 'success');
            }
        }

        // Confirm Add to Shipments (legacy function - now redirects to multi-select)
        function confirmAddToShipments(boxId) {
            toggleBoxSelection(boxId);
        }

        // Show notification function
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#5FA684' : '#2C677B'};
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                z-index: 3000;
                font-weight: bold;
                box-shadow: 0 4px 12px rgba(9, 31, 47, 0.2);
                animation: slideIn 0.3s ease-out;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            // Auto remove after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-in forwards';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Toggle VITABox Selection (legacy function for compatibility)
        function toggleColdBoxSelection(boxId) {
            // For dock interface, we use confirmation instead of direct toggle
            confirmAddToShipments(boxId);
        }

        // Update Selected Shipments Table
        function updateSelectedShipmentsTable() {
            const tbody = document.getElementById('selected-tbody');
            const countElement = document.getElementById('selectedCount');
            
            countElement.textContent = `${selectedColdBoxes.size} selected`;
            
            if (selectedColdBoxes.size === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="7" style="text-align: center; color: #2C677B; padding: 40px;">
                            No shipments selected. Use "Nearby VITABox" to detect and select VITABoxes.
                        </td>
                    </tr>
                `;
                return;
            }
            
            tbody.innerHTML = '';
            selectedColdBoxes.forEach(boxId => {
                const box = coldBoxData[boxId];
                if (!box) return;
                
                const isAlert = box.currentTemp > 8 || box.currentTemp < 2;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${box.id}</td>
                    <td>${box.boxId}</td>
                    <td>${box.route}</td>
                    <td>${box.startTime}</td>
                    <td><span class="${isAlert ? 'temp-alert' : 'temp-normal'}">${box.currentTemp}Â°C</span></td>
                    <td><span class="status-badge status-${box.status.toLowerCase()}">${box.status}</span></td>
                    <td>
                        <button class="btn btn-secondary" onclick="showColdBoxDetails('${box.id}')">View</button>
                        <button class="btn btn-secondary" onclick="removeColdBox('${box.id}')" style="margin-left: 5px;">Remove</button>
                    </td>
                `;
                
                tbody.appendChild(row);
            });
        }

        // Remove VITABox from Selection
        function removeColdBox(boxId) {
            selectedColdBoxes.delete(boxId);
            updateSelectedShipmentsTable();
            if (bluetoothEnabled) {
                displayArrivedColdBoxes();
            }
        }

        // Show VITABox Details Modal
        function showColdBoxDetails(boxId) {
            const box = coldBoxData[boxId];
            if (!box) return;
            
            const modal = document.getElementById('shipmentModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalContent = document.getElementById('modalContent');
            
            modalTitle.textContent = `${box.id} - ${box.vaccine} Details`;
            
            const isAlert = box.currentTemp > 8 || box.currentTemp < 2;
            
            modalContent.innerHTML = `
                <div style="display: grid; gap: 20px;">
                    <!-- Header Info -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; padding: 20px; background: #E1FCC0; border-radius: 8px;">
                        <div><strong>Route:</strong> ${box.route}</div>
                        <div><strong>Start:</strong> ${box.startTime}</div>
                        <div><strong>Vaccine:</strong> ${box.vaccine}</div>
                        <div><strong>Batch Number:</strong> ${box.batchNumber}</div>
                        <div><strong>Manufacturer:</strong> ${box.manufacturer}</div>
                        <div><strong>Doses:</strong> ${box.doses ? box.doses.toLocaleString() : 'N/A'}</div>
                        <div><strong>Expiry Date:</strong> ${box.expiryDate}</div>
                        <div><strong>Current Temp:</strong> <span class="${isAlert ? 'temp-alert' : 'temp-normal'}">${box.currentTemp}Â°C</span></div>
                        <div><strong>Status:</strong> <span class="status-badge status-${box.status.toLowerCase()}">${box.status}</span></div>
                        <div><strong>Battery:</strong> ${box.loggerBattery}%</div>
                    </div>
                    
                    <!-- Temperature Chart -->
                    <div>
                        <h3 style="margin-bottom: 15px;">Temperature Timeline</h3>
                        <div style="height: 300px; position: relative;">
                            <canvas id="tempChart"></canvas>
                        </div>
                    </div>
                    
                    <!-- Summary Metrics (if completed) -->
                    ${box.status !== 'ACTIVE' ? `
                    <div>
                        <h3 style="margin-bottom: 15px;">Summary Metrics</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                            <div class="kpi-card">
                                <div class="kpi-value">${box.minTemp}Â°C</div>
                                <div class="kpi-label">Min Temperature</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-value">${box.maxTemp}Â°C</div>
                                <div class="kpi-label">Max Temperature</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-value">${box.avgTemp}Â°C</div>
                                <div class="kpi-label">Avg Temperature</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-value">${box.timeInRange}%</div>
                                <div class="kpi-label">Time in Range</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-value">${box.excursions}</div>
                                <div class="kpi-label">Excursions</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-value">${box.degreeHours}</div>
                                <div class="kpi-label">Degree Hours >8Â°C</div>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- Export Buttons -->
                    <div style="display: flex; gap: 10px; justify-content: center;">
                        <button class="btn btn-primary" onclick="exportPDF('${box.id}')">ðŸ“„ Export PDF</button>
                        <button class="btn btn-secondary" onclick="exportCSV('${box.id}')">ðŸ“Š Export CSV</button>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            
            // Initialize temperature chart
            setTimeout(() => initTempChart(box), 100);
        }

        function closeModal() {
            document.getElementById('shipmentModal').style.display = 'none';
        }

        // Chart Initialization
        function initTempChart(box) {
            const ctx = document.getElementById('tempChart');
            if (!ctx) return;
            
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: box.temperatureData.map(d => d.time),
                    datasets: [{
                        label: 'Temperature (Â°C)',
                        data: box.temperatureData.map(d => d.temp),
                        borderColor: '#5FA684',
                        backgroundColor: 'rgba(95, 166, 132, 0.1)',
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Upper Limit (8Â°C)',
                        data: box.temperatureData.map(() => 8),
                        borderColor: '#e53e3e',
                        borderDash: [5, 5],
                        backgroundColor: 'transparent',
                        pointRadius: 0
                    }, {
                        label: 'Lower Limit (2Â°C)',
                        data: box.temperatureData.map(() => 2),
                        borderColor: '#2C677B',
                        borderDash: [5, 5],
                        backgroundColor: 'transparent',
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Temperature (Â°C)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Time (MYT)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    }
                }
            });
        }

        // Filter functions
        function filterShipments() {
            console.log('Filtering selected shipments...');
        }

        function filterByStatus() {
            const filterValue = document.getElementById('statusFilter').value;
            const tableBody = document.getElementById('outbound-tbody');
            const rows = tableBody.querySelectorAll('tr');
            
            rows.forEach(row => {
                const statusCell = row.querySelector('.status-badge');
                if (!statusCell) return;
                
                const status = statusCell.textContent.trim();
                
                if (filterValue === 'all' || status === filterValue) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }
        
        function filterOutboundShipments() {
            console.log('Filtering outbound shipments...');
        }

        function showOutboundDetails(shipmentId) {
            // Outbound shipment data aligned with map locations
            const outboundData = {
                'PG-OUT-001': {
                    id: 'PG-OUT-001',
                    destination: 'Kuala Lumpur Central Hub',
                    vaccine: 'COVID-19 mRNA Vaccines',
                    batchNumber: 'COV2025-PG-001',
                    manufacturer: 'Pfizer-BioNTech',
                    doses: 8500,
                    expiryDate: '2025-07-20',
                    departure: '2025-01-15 14:30 MYT',
                    currentTemp: 5.2,
                    status: 'ACTIVE',
                    currentLocation: 'En route - Ipoh',
                    eta: '2025-01-15 18:45 MYT',
                    driver: 'Ahmad bin Hassan',
                    vehicle: 'Cold Chain Truck PG-CC-001',
                    route: 'Penang â†’ Ipoh â†’ KL',
                    distance: '365 km',
                    progress: '45%'
                },
                'PG-OUT-009': {
                    id: 'PG-OUT-009',
                    destination: 'Johor Bahru Distribution',
                    vaccine: 'Meningococcal Vaccines',
                    batchNumber: 'MEN2025-PG-009',
                    manufacturer: 'Sanofi Pasteur',
                    doses: 2400,
                    expiryDate: '2025-11-15',
                    departure: '2025-01-15 14:00 MYT',
                    currentTemp: 7.6,
                    status: 'WARNING',
                    currentLocation: 'En route - Seremban',
                    eta: '2025-01-16 08:30 MYT',
                    driver: 'Rajesh Kumar',
                    vehicle: 'Cold Chain Truck PG-CC-009',
                    route: 'Penang â†’ Kuala Lumpur â†’ Seremban â†’ JB',
                    distance: '785 km',
                    progress: '25%',
                    issue: 'Temperature approaching upper limit - monitoring required'
                },
                'PG-OUT-012': {
                    id: 'PG-OUT-012',
                    destination: 'Kota Kinabalu Center',
                    vaccine: 'Polio Vaccines (IPV)',
                    batchNumber: 'IPV2025-PG-012',
                    manufacturer: 'Sanofi Pasteur',
                    doses: 1200,
                    expiryDate: '2025-05-30',
                    departure: '2025-01-15 08:00 MYT',
                    currentTemp: 9.2,
                    status: 'ALERT',
                    currentLocation: 'In transit - Flight MH2592 - DELAYED',
                    eta: 'Delayed',
                    driver: 'Flight Cargo Handler',
                    vehicle: 'Cargo Flight MH2592',
                    route: 'Penang â†’ Kota Kinabalu (Air)',
                    distance: '1,420 km',
                    progress: '60%',
                    issue: 'Critical temperature excursion - cargo hold cooling malfunction'
                },
                'PG-OUT-013': {
                    id: 'PG-OUT-013',
                    destination: 'Phuket Medical Center',
                    vaccine: 'Typhoid Vaccines',
                    batchNumber: 'TYP2025-PG-013',
                    manufacturer: 'GSK',
                    doses: 950,
                    expiryDate: '2025-03-25',
                    departure: '2025-01-15 13:45 MYT',
                    currentTemp: 8.9,
                    status: 'ALERT',
                    currentLocation: 'Stopped - Surat Thani checkpoint',
                    eta: 'Delayed',
                    driver: 'Somchai Thanakit',
                    vehicle: 'International Cold Chain Truck TH-CC-105',
                    route: 'Penang â†’ Hat Yai â†’ Surat Thani â†’ Phuket',
                    distance: '580 km',
                    progress: '70%',
                    issue: 'Customs delay + cooling system stress from prolonged stop'
                },
                // Delivered shipments
                'PG-OUT-014': {
                    id: 'PG-OUT-014',
                    destination: 'KL City Center Clinic',
                    vaccine: 'COVID-19 mRNA Vaccines',
                    batchNumber: 'COV2025-PG-014',
                    manufacturer: 'Pfizer-BioNTech',
                    doses: 3200,
                    expiryDate: '2025-08-15',
                    departure: '2025-01-14 08:30 MYT',
                    delivered: '2025-01-14 15:45 MYT',
                    status: 'Delivered',
                    currentLocation: 'Delivered - VITABox unloaded',
                    driver: 'Lim Wei Jie',
                    vehicle: 'Cold Chain Truck PG-CC-014',
                    route: 'Penang â†’ KL City Center',
                    distance: '350 km',
                    progress: '100%',
                    deliveryNote: 'All vaccines successfully delivered and stored. VITABox ready for return journey.'
                },
                // Returning shipments
                'PG-OUT-019': {
                    id: 'PG-OUT-019',
                    destination: 'Ampang Hospital â†’ Penang',
                    vaccine: 'Pneumococcal Vaccines',
                    batchNumber: 'PNE2025-PG-019',
                    manufacturer: 'Pfizer',
                    doses: 1800,
                    expiryDate: '2025-06-10',
                    departure: '2025-01-13 07:45 MYT',
                    delivered: '2025-01-13 16:20 MYT',
                    returnStart: '2025-01-14 09:30 MYT',
                    status: 'Returning',
                    currentLocation: 'En route to Penang - Slim River',
                    eta: '2025-01-15 16:30 MYT',
                    driver: 'Muthu Kumar',
                    vehicle: 'Empty VITABox Return Truck RET-019',
                    route: 'Ampang â†’ Slim River â†’ Penang',
                    distance: '385 km',
                    progress: '65%',
                    returnNote: 'Empty VITABox returning to Penang hub for cleaning and reuse'
                },
                // Returned shipments
                'PG-OUT-024': {
                    id: 'PG-OUT-024',
                    destination: 'Petaling Jaya Clinic',
                    vaccine: 'DPT (Diphtheria) Vaccines',
                    batchNumber: 'DPT2025-PG-024',
                    manufacturer: 'GSK',
                    doses: 2100,
                    expiryDate: '2025-04-18',
                    departure: '2025-01-10 09:00 MYT',
                    delivered: '2025-01-10 14:30 MYT',
                    returnStart: '2025-01-11 08:15 MYT',
                    returned: '2025-01-11 15:45 MYT',
                    status: 'Returned',
                    currentLocation: 'Returned to Penang Hub',
                    driver: 'Chan Ah Kow',
                    vehicle: 'Completed - VITABox at Penang',
                    route: 'Penang â†’ PJ â†’ Penang (Complete)',
                    distance: '750 km (Total)',
                    progress: '100%',
                    completedCycle: 'VITABox has returned to Penang hub'
                }
            };

            // Get location data for context
            const locationId = getLocationIdByShipmentId(shipmentId);
            const locationData = coldChainLocations.find(loc => loc.id === locationId);

            const shipment = outboundData[shipmentId] || {
                id: shipmentId,
                destination: 'Loading details...',
                medicalDevice: 'Loading...',
                status: 'TRACKING',
                message: 'Detailed tracking information will be available shortly.'
            };

            const modal = document.getElementById('shipmentModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalContent = document.getElementById('modalContent');
            
            modalTitle.textContent = `${shipment.id} - Outbound to ${shipment.destination}`;
            
            const isAlert = shipment.currentTemp > 8;
            const statusColor = shipment.status === 'ALERT' ? '#e53e3e' : shipment.status === 'WARNING' ? '#ed8936' : '#5FA684';
            
            // Generate temperature timeline data
            const timelineData = [
                { time: '08:00', temp: 2.1, status: 'Normal' },
                { time: '10:00', temp: 2.8, status: 'Normal' },
                { time: '12:00', temp: 3.5, status: 'Normal' },
                { time: '14:00', temp: shipment.status === 'ALERT' ? 8.2 : shipment.status === 'WARNING' ? 7.1 : 4.2, status: shipment.status === 'ALERT' ? 'Critical' : shipment.status === 'WARNING' ? 'Warning' : 'Normal' },
                { time: '16:00', temp: shipment.status === 'ALERT' ? 8.8 : shipment.status === 'WARNING' ? 7.4 : 4.8, status: shipment.status === 'ALERT' ? 'Critical' : shipment.status === 'WARNING' ? 'Warning' : 'Normal' },
                { time: 'Now', temp: shipment.currentTemp || 5.2, status: shipment.status === 'ALERT' ? 'Critical' : shipment.status === 'WARNING' ? 'Warning' : 'Normal' }
            ];
            
            modalContent.innerHTML = `
                <div style="display: grid; gap: 20px;">
                    <!-- Header Info -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; padding: 20px; background: ${shipment.status === 'ALERT' ? '#fef2f2' : shipment.status === 'WARNING' ? '#fffbeb' : '#E1FCC0'}; border-radius: 8px;">
                        <div><strong>Destination:</strong> ${shipment.destination}</div>
                        <div><strong>Departure:</strong> ${shipment.departure}</div>
                        <div><strong>Vaccine:</strong> ${shipment.vaccine}</div>
                        <div><strong>Batch Number:</strong> ${shipment.batchNumber || 'N/A'}</div>
                        <div><strong>Manufacturer:</strong> ${shipment.manufacturer || 'N/A'}</div>
                        <div><strong>Doses:</strong> ${shipment.doses ? shipment.doses.toLocaleString() : 'N/A'}</div>
                        <div><strong>Expiry:</strong> ${shipment.expiryDate || 'N/A'}</div>
                        <div><strong>Current Temp:</strong> <span class="${isAlert ? 'temp-alert' : shipment.status === 'WARNING' ? 'temp-warning' : 'temp-normal'}">${shipment.currentTemp}Â°C</span></div>
                        <div><strong>Status:</strong> <span style="color: ${statusColor}; font-weight: bold;">${shipment.status}</span></div>
                        <div><strong>Current Location:</strong> ${shipment.currentLocation}</div>
                        <div><strong>ETA:</strong> ${shipment.eta}</div>
                        <div><strong>Progress:</strong> ${shipment.progress || 'N/A'}</div>
                    </div>
                    
                    <!-- Summary Metrics KPI Cards -->
                    <div>
                        <h3 style="margin-bottom: 15px;">ðŸ“Š Summary Metrics</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px;">
                            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(9, 31, 47, 0.1); border-left: 4px solid #5FA684; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: bold; color: #2C677B; margin-bottom: 5px;">${shipment.currentTemp || 5.2}Â°C</div>
                                <div style="font-size: 0.85rem; color: #091F2F;">Current Temp</div>
                            </div>
                            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(9, 31, 47, 0.1); border-left: 4px solid #ed8936; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: bold; color: #2C677B; margin-bottom: 5px;">${Math.max(...timelineData.map(d => d.temp)).toFixed(1)}Â°C</div>
                                <div style="font-size: 0.85rem; color: #091F2F;">Max Temp</div>
                            </div>
                            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(9, 31, 47, 0.1); border-left: 4px solid #2C677B; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: bold; color: #2C677B; margin-bottom: 5px;">${Math.min(...timelineData.map(d => d.temp)).toFixed(1)}Â°C</div>
                                <div style="font-size: 0.85rem; color: #091F2F;">Min Temp</div>
                            </div>
                            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(9, 31, 47, 0.1); border-left: 4px solid #B0FC84; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: bold; color: #2C677B; margin-bottom: 5px;">${(timelineData.reduce((sum, d) => sum + d.temp, 0) / timelineData.length).toFixed(1)}Â°C</div>
                                <div style="font-size: 0.85rem; color: #091F2F;">Avg Temp</div>
                            </div>
                            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(9, 31, 47, 0.1); border-left: 4px solid #5FA684; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: bold; color: #2C677B; margin-bottom: 5px;">${shipment.status === 'ALERT' ? '76' : shipment.status === 'WARNING' ? '92' : '98'}%</div>
                                <div style="font-size: 0.85rem; color: #091F2F;">Time in Range</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Temperature Timeline -->
                    <div>
                        <h3 style="margin-bottom: 15px;">ðŸŒ¡ï¸ Temperature Timeline</h3>
                        <div style="background: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(9, 31, 47, 0.1);">
                            <div style="overflow-x: auto;">
                                <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                                    <thead>
                                        <tr style="background: #E1FCC0;">
                                            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #B0FC84;">Time</th>
                                            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #B0FC84;">Temperature</th>
                                            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #B0FC84;">Status</th>
                                            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #B0FC84;">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${timelineData.map((data, index) => {
                                            const locations = ['Penang Dock', 'Highway Checkpoint', 'Rest Area', 'Border Crossing', 'Destination Approach', shipment.currentLocation || 'In Transit'];
                                            return `
                                            <tr style="${data.status === 'Critical' ? 'background: #fef2f2;' : data.status === 'Warning' ? 'background: #fffbeb;' : ''}">
                                                <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${data.time}</td>
                                                <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: ${data.status === 'Critical' ? '#e53e3e' : data.status === 'Warning' ? '#ed8936' : '#5FA684'};">${data.temp}Â°C</td>
                                                <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">
                                                    <span style="padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; background: ${data.status === 'Critical' ? '#fef2f2' : data.status === 'Warning' ? '#fffbeb' : '#f0f8ff'}; color: ${data.status === 'Critical' ? '#e53e3e' : data.status === 'Warning' ? '#ed8936' : '#5FA684'}; border: 1px solid ${data.status === 'Critical' ? '#fed7d7' : data.status === 'Warning' ? '#fbd38d' : '#bee3f8'};">${data.status}</span>
                                                </td>
                                                <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-size: 0.8rem; color: #666;">${locations[index] || 'Unknown'}</td>
                                            </tr>
                                        `}).join('')}
                                    </tbody>
                                </table>
                            </div>
                            
                            <!-- Visual Temperature Chart Area -->
                            <div style="margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 6px; text-align: center;">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                                    <span style="font-size: 0.8rem; color: #666;">2Â°C (Safe Min)</span>
                                    <strong style="color: #091F2F;">Temperature Trend</strong>
                                    <span style="font-size: 0.8rem; color: #666;">8Â°C (Safe Max)</span>
                                </div>
                                <div style="height: 60px; background: linear-gradient(to right, #5FA684 0%, ${shipment.status === 'ALERT' ? '#e53e3e 70%' : shipment.status === 'WARNING' ? '#ed8936 60%, #5FA684 90%' : '#5FA684 100%'}); border-radius: 4px; position: relative; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">
                                    ${shipment.status === 'ALERT' ? 'ðŸš¨ CRITICAL EXCURSION DETECTED' : shipment.status === 'WARNING' ? 'âš ï¸ APPROACHING LIMITS' : 'âœ… WITHIN SAFE RANGE'}
                                </div>
                                <div style="margin-top: 8px; font-size: 0.75rem; color: #666;">Real-time temperature monitoring â€¢ Updated every 5 minutes</div>
                            </div>
                        </div>
                    </div>
                    
                    ${locationData ? `
                    <div style="padding: 15px; background: #f0f8ff; border-left: 4px solid #5FA684; border-radius: 8px;">
                        <strong style="color: #5FA684;">ðŸ“ DESTINATION INFO:</strong><br>
                        <div style="margin-top: 8px; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; font-size: 0.9rem;">
                            <div><strong>Facility:</strong> ${locationData.name}</div>
                            <div><strong>Status:</strong> ${locationData.status.toUpperCase()}</div>
                            <div><strong>Active Boxes:</strong> ${locationData.count}</div>
                            <div><strong>Avg Temp:</strong> ${locationData.temp}Â°C</div>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${shipment.status === 'Delivered' ? `
                    <div style="padding: 15px; background: #f0f8ff; border-left: 4px solid #0ea5e9; border-radius: 8px;">
                        <strong style="color: #0ea5e9;">ðŸ“¦ DELIVERY COMPLETED:</strong><br>
                        Delivered: ${shipment.delivered}<br>
                        ${shipment.deliveryNote}<br>
                        <strong>VITABox ready for return to Penang hub</strong>
                    </div>
                    ` : shipment.status === 'Returning' ? `
                    <div style="padding: 15px; background: #fefce8; border-left: 4px solid #f59e0b; border-radius: 8px;">
                        <strong style="color: #f59e0b;">ðŸšš RETURNING TO PENANG:</strong><br>
                        Return Started: ${shipment.returnStart}<br>
                        ${shipment.returnNote}<br>
                        <strong>Progress: ${shipment.progress} to Penang hub</strong>
                    </div>
                    ` : shipment.status === 'Returned' ? `
                    <div style="padding: 15px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px;">
                        <strong style="color: #16a34a;">âœ… RETURNED TO PENANG:</strong><br>
                        Returned: ${shipment.returned}<br>
                        ${shipment.completedCycle}<br>
                    </div>
                    ` : shipment.issue ? `
                    <div style="padding: 15px; background: ${shipment.status === 'ALERT' ? '#fef2f2' : '#fffbeb'}; border-left: 4px solid ${statusColor}; border-radius: 8px;">
                        <strong style="color: ${statusColor};">âš ï¸ ${shipment.status} DETAILS:</strong><br>
                        ${shipment.issue}
                    </div>
                    ` : ''}
                    
                    ${shipment.driver ? `
                    <div>
                        <h3 style="margin-bottom: 15px;">Transport Details</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                            <div><strong>Driver/Handler:</strong> ${shipment.driver}</div>
                            <div><strong>Vehicle:</strong> ${shipment.vehicle}</div>
                            <div><strong>Route:</strong> ${shipment.route}</div>
                            <div><strong>Total Distance:</strong> ${shipment.distance}</div>
                        </div>
                    </div>
                    ` : `
                    <div style="text-align: center; padding: 40px; color: #666;">
                        ${shipment.message}
                    </div>
                    `}
                    
                    <!-- Action Buttons -->
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="contactDriver('${shipment.id}')">ðŸ“ž Contact Driver</button>
                        <button class="btn btn-secondary" onclick="exportTrackingPDF('${shipment.id}')">ðŸ“„ Export Report</button>
                        <button class="btn btn-secondary" onclick="viewOnMap('${locationId}')">ðŸ—ºï¸ View on Map</button>
                        ${shipment.status === 'ALERT' ? '<button class="btn btn-danger" onclick="escalateAlert(\'' + shipment.id + '\')">ðŸš¨ Escalate Alert</button>' : ''}
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        }

        // Helper function to get location ID by shipment ID
        function getLocationIdByShipmentId(shipmentId) {
            const shipmentToLocationMap = {
                'PG-OUT-001': 'KL-001',
                'PG-OUT-002': 'IP-001',
                'PG-OUT-003': 'MLK-001',
                'PG-OUT-004': 'KT-001',
                'PG-OUT-005': 'KCH-001',
                'PG-OUT-006': 'SDK-001',
                'PG-OUT-007': 'SG-001',
                'PG-OUT-008': 'BKK-001',
                'PG-OUT-009': 'JB-001',
                'PG-OUT-010': 'MRI-001',
                'PG-OUT-011': 'HDY-001',
                'PG-OUT-012': 'KK-001',
                'PG-OUT-013': 'PKT-001'
            };
            return shipmentToLocationMap[shipmentId];
        }

        // View shipment location on map
        function viewOnMap(locationId) {
            showPageDirectly('home');
            // Could add map highlighting functionality here
            showNotification(`ðŸ—ºï¸ Switched to map view - look for location ${locationId}`, 'info');
        }

        function contactDriver(shipmentId) {
            alert(`Connecting to driver for shipment ${shipmentId}...\n\nThis would initiate a call or message to the transport driver in a production system.`);
        }

        function exportTrackingPDF(shipmentId) {
            alert(`Generating tracking report for ${shipmentId}...\n\nThis would create a detailed PDF with temperature logs, route information, and compliance data.`);
        }

        function escalateAlert(shipmentId) {
            alert(`ðŸš¨ ESCALATING ALERT for ${shipmentId}\n\nNotifying:\n- Penang Dock Manager\n- Cold Chain Supervisor\n- Medical Device Safety Officer\n- Destination facility\n\nEmergency response protocols activated.`);
        }

        // Export functions
        function exportPDF(boxId) {
            alert(`Generating compliance PDF report for medical VITABox ${boxId}...`);
        }

        function exportCSV(boxId) {
            alert(`Generating temperature data CSV for VITABox ${boxId}...`);
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('shipmentModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // VITABox Storage Functions
        function filterStorageByStatus(status) {
            // Update status filter and apply filter
            const statusFilter = document.getElementById('storage-status-filter');
            if (statusFilter) {
                statusFilter.value = status;
                filterColdBoxStorage();
            }
            
            // Switch to cold storage page if not already there
            const currentPage = document.querySelector('.page.active').id;
            if (currentPage !== 'cold-storage') {
                showPageDirectly('cold-storage');
            }
        }

        function filterColdBoxStorage() {
            const statusFilter = document.getElementById('storage-status-filter').value;
            const cycleFilter = document.getElementById('cycle-filter').value;
            const lastUsedFilter = document.getElementById('last-used-filter').value;
            const searchText = document.getElementById('storage-search').value.toLowerCase();
            
            populateStorageTable(statusFilter, cycleFilter, lastUsedFilter, searchText);
        }

        function clearStorageFilters() {
            document.getElementById('storage-status-filter').value = 'all';
            document.getElementById('cycle-filter').value = 'all';
            document.getElementById('last-used-filter').value = 'all';
            document.getElementById('storage-search').value = '';
            filterColdBoxStorage();
        }

        function populateStorageTable(statusFilter = 'all', cycleFilter = 'all', lastUsedFilter = 'all', searchText = '') {
            const tbody = document.getElementById('storage-tbody');
            const countElement = document.getElementById('storage-count');
            
            let filteredBoxes = Object.values(coldBoxStorage);
            
            // Apply status filter
            if (statusFilter !== 'all') {
                filteredBoxes = filteredBoxes.filter(box => box.status === statusFilter);
            }
            
            // Apply cycle filter
            if (cycleFilter !== 'all') {
                filteredBoxes = filteredBoxes.filter(box => {
                    if (cycleFilter === 'low') return box.reuseCycles >= 1 && box.reuseCycles <= 20;
                    if (cycleFilter === 'medium') return box.reuseCycles >= 21 && box.reuseCycles <= 50;
                    if (cycleFilter === 'high') return box.reuseCycles >= 51;
                    return true;
                });
            }
            
            // Apply last used filter
            if (lastUsedFilter !== 'all') {
                const today = new Date();
                const todayStr = today.toISOString().split('T')[0];
                const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
                const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
                
                filteredBoxes = filteredBoxes.filter(box => {
                    const lastUsed = box.lastUsed;
                    if (lastUsedFilter === 'today') return lastUsed === todayStr;
                    if (lastUsedFilter === 'week') return lastUsed >= weekAgo;
                    if (lastUsedFilter === 'month') return lastUsed >= monthAgo;
                    if (lastUsedFilter === 'over-month') return lastUsed < monthAgo;
                    return true;
                });
            }
            
            // Apply search filter
            if (searchText) {
                filteredBoxes = filteredBoxes.filter(box => 
                    box.id.toLowerCase().includes(searchText) ||
                    box.lastShipment?.toLowerCase().includes(searchText) ||
                    box.currentShipment?.toLowerCase().includes(searchText) ||
                    box.notes.toLowerCase().includes(searchText)
                );
            }
            
            // Update count
            countElement.textContent = `${filteredBoxes.length} boxes (filtered from ${Object.keys(coldBoxStorage).length} total)`;
            
            // Generate table rows
            tbody.innerHTML = '';
            if (filteredBoxes.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="8" style="text-align: center; color: #2C677B; padding: 40px;">
                            No VITABoxes found matching the current filters.
                        </td>
                    </tr>
                `;
                return;
            }
            
            filteredBoxes.forEach(box => {
                const statusColor = getStatusColor(box.status);
                const cycleLevel = getCycleLevel(box.reuseCycles);
                const daysSinceUsed = getDaysSinceUsed(box.lastUsed);
                
                const row = document.createElement('tr');
                row.style.backgroundColor = getRowBackgroundColor(box.status);
                
                row.innerHTML = `
                    <td>
                        <strong>${box.id}</strong><br>
                        <small style="color: #666;">${box.location}</small>
                    </td>
                    <td>
                        <span class="status-badge" style="background: ${statusColor}; color: white; font-size: 0.8rem; padding: 4px 8px; border-radius: 12px;">
                            ${getStatusDisplayName(box.status)}
                        </span>
                    </td>
                    <td>
                        ${box.lastShipment || 'N/A'}<br>
                        <small style="color: #666;">${box.lastUsed}</small>
                    </td>
                    <td>
                        ${box.currentShipment ? 
                            `<strong style="color: #ed8936;">${box.currentShipment}</strong><br><small style="color: #ed8936;">In Transit</small>` : 
                            '<span style="color: #666;">None</span>'
                        }
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 5px;">
                            <strong style="font-size: 1.1rem; color: ${cycleLevel.color};">${box.reuseCycles}</strong>
                            <span style="font-size: 0.8rem; color: ${cycleLevel.color};">${cycleLevel.badge}</span>
                        </div>
                        <small style="color: #666;">${cycleLevel.label}</small>
                    </td>
                    <td>
                        ${box.lastUsed}<br>
                        <small style="color: ${daysSinceUsed.color};">${daysSinceUsed.text}</small>
                    </td>
                    <td>
                        ${box.nextMaintenance}<br>
                        <small style="color: ${getMaintenanceUrgency(box.nextMaintenance).color};">
                            ${getMaintenanceUrgency(box.nextMaintenance).text}
                        </small>
                    </td>
                    <td>
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <button class="btn btn-secondary" onclick="showBoxDetails('${box.id}')" style="padding: 4px 8px; font-size: 0.8rem;">View</button>
                            ${getActionButtons(box)}
                        </div>
                    </td>
                `;
                
                tbody.appendChild(row);
            });
        }

        function getStatusColor(status) {
            const colors = {
                'available': '#5FA684',
                'validating': '#2C677B',
                'in-use': '#ed8936',
                'returned': '#0ea5e9',
                're-sterilising': '#8b5cf6',
                'not-available': '#e53e3e'
            };
            return colors[status] || '#666';
        }

        function getStatusDisplayName(status) {
            const names = {
                'available': 'Available',
                'validating': 'Validating',
                'in-use': 'In Use',
                'returned': 'Returned',
                're-sterilising': 'Re-sterilising',
                'not-available': 'Not Available'
            };
            return names[status] || status;
        }

        function getRowBackgroundColor(status) {
            const colors = {
                'available': '#f0fdf4',
                'validating': '#f8fafc',
                'in-use': '#fffbeb',
                'returned': '#f0f9ff',
                're-sterilising': '#faf5ff',
                'not-available': '#fef2f2'
            };
            return colors[status] || 'white';
        }

        function getCycleLevel(cycles) {
            if (cycles <= 20) {
                return { color: '#5FA684', badge: 'ðŸ†•', label: 'New' };
            } else if (cycles <= 50) {
                return { color: '#ed8936', badge: 'âš¡', label: 'Active' };
            } else {
                return { color: '#8b5cf6', badge: 'ðŸ†', label: 'Veteran' };
            }
        }

        function getDaysSinceUsed(lastUsed) {
            const today = new Date();
            const lastUsedDate = new Date(lastUsed);
            const diffTime = Math.abs(today - lastUsedDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 0) {
                return { text: 'Today', color: '#5FA684' };
            } else if (diffDays === 1) {
                return { text: '1 day ago', color: '#5FA684' };
            } else if (diffDays <= 7) {
                return { text: `${diffDays} days ago`, color: '#ed8936' };
            } else if (diffDays <= 30) {
                return { text: `${diffDays} days ago`, color: '#2C677B' };
            } else {
                return { text: `${diffDays} days ago`, color: '#e53e3e' };
            }
        }

        function getMaintenanceUrgency(nextMaintenance) {
            const today = new Date();
            const maintenanceDate = new Date(nextMaintenance);
            const diffTime = maintenanceDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays < 0) {
                return { text: 'OVERDUE', color: '#e53e3e' };
            } else if (diffDays <= 7) {
                return { text: `${diffDays} days`, color: '#ed8936' };
            } else if (diffDays <= 30) {
                return { text: `${diffDays} days`, color: '#2C677B' };
            } else {
                return { text: `${diffDays} days`, color: '#5FA684' };
            }
        }

        function getActionButtons(box) {
            switch (box.status) {
                case 'available':
                    return '<button class="btn btn-primary" onclick="assignToShipment(\'' + box.id + '\')" style="padding: 4px 8px; font-size: 0.8rem;">Assign</button>';
                case 'in-use':
                    return '<button class="btn btn-warning" onclick="trackShipment(\'' + box.currentShipment + '\')" style="padding: 4px 8px; font-size: 0.8rem;">Track</button>';
                case 'returned':
                    return '<button class="btn btn-secondary" onclick="startValidation(\'' + box.id + '\')" style="padding: 4px 8px; font-size: 0.8rem;">Validate</button>';
                case 'validating':
                    return '<button class="btn btn-secondary" onclick="completeValidation(\'' + box.id + '\')" style="padding: 4px 8px; font-size: 0.8rem;">Complete</button>';
                case 're-sterilising':
                    return '<button class="btn btn-secondary" onclick="completeSterilisation(\'' + box.id + '\')" style="padding: 4px 8px; font-size: 0.8rem;">Complete</button>';
                case 'not-available':
                    return '<button class="btn btn-danger" onclick="scheduleRepair(\'' + box.id + '\')" style="padding: 4px 8px; font-size: 0.8rem;">Repair</button>';
                default:
                    return '';
            }
        }

        function showBoxDetails(boxId) {
            const box = coldBoxStorage[boxId];
            if (!box) return;
            
            const modal = document.getElementById('shipmentModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalContent = document.getElementById('modalContent');
            
            modalTitle.textContent = `${box.id} - VITABox Details & History`;
            
            // Calculate waste prevented
            const avgBoxWeight = 4; // kg per box
            const wastePrevented = (box.reuseCycles - 1) * avgBoxWeight;
            const co2Saved = wastePrevented * 1.5; // kg CO2 per kg waste
            const costSaved = (box.reuseCycles - 1) * 200; // RM per box
            
            modalContent.innerHTML = `
                <div style="display: grid; gap: 20px;">
                    <!-- Box Overview -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; padding: 20px; background: ${getRowBackgroundColor(box.status)}; border-radius: 8px; border-left: 4px solid ${getStatusColor(box.status)};">
                        <div><strong>Box ID:</strong> ${box.id}</div>
                        <div><strong>Current Status:</strong> <span style="color: ${getStatusColor(box.status)}; font-weight: bold;">${getStatusDisplayName(box.status)}</span></div>
                        <div><strong>Location:</strong> ${box.location}</div>
                        <div><strong>Condition:</strong> ${box.condition}</div>
                        <div><strong>Reuse Cycles:</strong> <span style="font-size: 1.2rem; font-weight: bold; color: ${getCycleLevel(box.reuseCycles).color};">${box.reuseCycles}</span></div>
                        <div><strong>Last Used:</strong> ${box.lastUsed} (${getDaysSinceUsed(box.lastUsed).text})</div>
                        <div><strong>Next Maintenance:</strong> ${box.nextMaintenance}</div>
                        <div><strong>Last Shipment:</strong> ${box.lastShipment || 'None'}</div>
                        <div><strong>Current Shipment:</strong> ${box.currentShipment || 'None'}</div>
                    </div>
                    
                    <!-- Environmental Impact -->
                    <div>
                        <h3 style="margin-bottom: 15px;">â™»ï¸ Environmental Impact (This Box)</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                            <div class="kpi-card" style="border-left-color: #5FA684;">
                                <div class="kpi-value">${box.reuseCycles}</div>
                                <div class="kpi-label">Total Uses</div>
                            </div>
                            <div class="kpi-card" style="border-left-color: #B0FC84;">
                                <div class="kpi-value">${wastePrevented.toFixed(1)} kg</div>
                                <div class="kpi-label">Waste Prevented</div>
                            </div>
                            <div class="kpi-card" style="border-left-color: #2C677B;">
                                <div class="kpi-value">${co2Saved.toFixed(0)} kg</div>
                                <div class="kpi-label">COâ‚‚ Saved</div>
                            </div>
                            <div class="kpi-card" style="border-left-color: #ed8936;">
                                <div class="kpi-value">RM ${costSaved.toLocaleString()}</div>
                                <div class="kpi-label">Cost Saved</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recent Usage History -->
                    <div>
                        <h3 style="margin-bottom: 15px;">ðŸ“‹ Recent Usage History</h3>
                        <div style="background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
                            <table style="width: 100%; font-size: 0.9rem;">
                                <thead style="background: #f8f9fa;">
                                    <tr>
                                        <th style="padding: 10px;">Date</th>
                                        <th style="padding: 10px;">Shipment</th>
                                        <th style="padding: 10px;">Route</th>
                                        <th style="padding: 10px;">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding: 8px;">${box.lastUsed}</td>
                                        <td style="padding: 8px;">${box.lastShipment}</td>
                                        <td style="padding: 8px;">Penang â†’ KL</td>
                                        <td style="padding: 8px;"><span class="status-badge status-pass">COMPLETED</span></td>
                                    </tr>
                                    <tr style="background: #f8f9fa;">
                                        <td style="padding: 8px;">2025-01-10</td>
                                        <td style="padding: 8px;">PG-OUT-${String(parseInt(box.lastShipment.split('-')[2]) - 1).padStart(3, '0')}</td>
                                        <td style="padding: 8px;">Penang â†’ Ipoh</td>
                                        <td style="padding: 8px;"><span class="status-badge status-pass">COMPLETED</span></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px;">2025-01-05</td>
                                        <td style="padding: 8px;">PG-OUT-${String(parseInt(box.lastShipment.split('-')[2]) - 2).padStart(3, '0')}</td>
                                        <td style="padding: 8px;">Penang â†’ Johor</td>
                                        <td style="padding: 8px;"><span class="status-badge status-pass">COMPLETED</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    ${box.notes ? `
                    <div style="padding: 15px; background: #f0f8ff; border-left: 4px solid #2C677B; border-radius: 8px;">
                        <strong style="color: #2C677B;">ðŸ“ Notes:</strong><br>
                        ${box.notes}
                    </div>
                    ` : ''}
                    
                    <!-- Action Buttons -->
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="printBoxLabel('${box.id}')">ðŸ·ï¸ Print Label</button>
                        <button class="btn btn-secondary" onclick="exportBoxHistory('${box.id}')">ðŸ“„ Export History</button>
                        <button class="btn btn-secondary" onclick="editBoxDetails('${box.id}')">âœï¸ Edit Details</button>
                        ${box.currentShipment ? 
                            '<button class="btn btn-warning" onclick="trackShipment(\'' + box.currentShipment + '\')">ðŸšš Track Current Shipment</button>' : 
                            '<button class="btn btn-primary" onclick="assignToShipment(\'' + box.id + '\')">âž• Assign to Shipment</button>'
                        }
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        }

        function showESGVisualization() {
            const esgPanel = document.getElementById('esg-panel');
            esgPanel.style.display = 'block';
            esgPanel.scrollIntoView({ behavior: 'smooth' });
            
            // Update ESG metrics
            updateESGMetrics();
        }

        function hideESGVisualization() {
            document.getElementById('esg-panel').style.display = 'none';
        }

        function updateESGMetrics() {
            const totalCycles = Object.values(coldBoxStorage).reduce((sum, box) => sum + box.reuseCycles, 0);
            const avgCycles = Math.round(totalCycles / Object.keys(coldBoxStorage).length);
            const wasteReduced = ((totalCycles - Object.keys(coldBoxStorage).length) / totalCycles * 100).toFixed(1);
            const carbonSaved = Math.round((totalCycles - Object.keys(coldBoxStorage).length) * 4 * 1.5);
            const costSavings = ((totalCycles - Object.keys(coldBoxStorage).length) * 200).toLocaleString();
            
            document.getElementById('total-reuses').textContent = totalCycles.toLocaleString();
            document.getElementById('waste-prevented').textContent = wasteReduced + '%';
            document.getElementById('carbon-saved').textContent = carbonSaved.toLocaleString();
            document.getElementById('cost-savings').textContent = 'RM ' + costSavings;
        }

        // Box action functions
        function assignToShipment(boxId) {
            alert(`Assigning VITABox ${boxId} to a new shipment...\n\nThis would integrate with the shipment creation system to assign this box to an outbound shipment.`);
        }

        function trackShipment(shipmentId) {
            showOutboundDetails(shipmentId);
        }

        function startValidation(boxId) {
            const box = coldBoxStorage[boxId];
            if (box) {
                box.status = 'validating';
                box.location = 'Validation-Queue';
                populateStorageTable();
                showNotification(`Started validation process for ${boxId}`, 'info');
            }
        }

        function completeValidation(boxId) {
            const box = coldBoxStorage[boxId];
            if (box) {
                box.status = 'available';
                box.location = `Bay-${String.fromCharCode(65 + Math.floor(Math.random() * 3))}${Math.floor(Math.random() * 6) + 1}`;
                box.condition = 'Good';
                populateStorageTable();
                showNotification(`Validation completed for ${boxId} - Now available for use`, 'success');
            }
        }

        function completeSterilisation(boxId) {
            const box = coldBoxStorage[boxId];
            if (box) {
                box.status = 'available';
                box.location = `Bay-${String.fromCharCode(65 + Math.floor(Math.random() * 3))}${Math.floor(Math.random() * 6) + 1}`;
                box.condition = 'Excellent';
                populateStorageTable();
                showNotification(`Sterilisation completed for ${boxId} - Ready for use`, 'success');
            }
        }

        function scheduleRepair(boxId) {
            alert(`Scheduling repair for VITABox ${boxId}...\n\nThis would create a maintenance ticket and notify the technical team.`);
        }

        function refreshStorageData() {
            populateStorageTable();
            showNotification('VITABox storage data refreshed', 'info');
        }

        function addNewColdBox() {
            alert('Add New VITABox\n\nThis would open a form to register a new VITABox in the inventory system with:\n- Box ID\n- Initial location\n- Calibration data\n- Maintenance schedule');
        }

        function exportStorageData() {
            alert('Exporting VITABox Storage Data...\n\nThis would generate a comprehensive report including:\n- All box statuses\n- Usage history\n- Cycle counts\n- Maintenance schedules\n- ESG metrics');
        }

        function printBoxLabel(boxId) {
            alert(`Printing QR code label for ${boxId}...\n\nThis would generate a printable QR code label containing box information for easy tracking.`);
        }

        function exportBoxHistory(boxId) {
            alert(`Exporting history for ${boxId}...\n\nThis would create a detailed report with all usage history, temperature data, and maintenance records.`);
        }

        function editBoxDetails(boxId) {
            alert(`Edit Details for ${boxId}\n\nThis would open a form to update:\n- Location\n- Condition\n- Notes\n- Maintenance schedule`);
        }

        // Initialize storage data when page loads
        document.addEventListener('DOMContentLoaded', function() {
            console.log('VITABox Cold Chain Dashboard initialized for Malaysia');
            initializeInteractiveMap();
            startRealTimeUpdates();
            
            // Initialize VITABox Storage
            populateStorageTable();
            
            // Request notification permission
            if ('Notification' in window && Notification.permission === 'default') {
                Notification.requestPermission();
            }
            
            // Show welcome notification
            setTimeout(() => {
                showNotification('Welcome to VITABox Cold Chain Monitoring Dashboard', 'info');
            }, 1000);
        });
        
        // Real-time Updates Simulation
        function startRealTimeUpdates() {
            // Simulate temperature updates every 30 seconds
            setInterval(() => {
                updateTemperatures();
            }, 30000);
            
            // Simulate alerts every 2 minutes  
            setInterval(() => {
                generateRandomAlert();
            }, 120000);
        }
        
        function updateTemperatures() {
            // Simulate small temperature fluctuations
            Object.values(coldBoxData).forEach(box => {
                const fluctuation = (Math.random() - 0.5) * 0.4; // Â±0.2Â°C
                box.currentTemp = Math.round((box.currentTemp + fluctuation) * 10) / 10;
                
                // Check for alerts
                if (box.currentTemp > 8 || box.currentTemp < 2) {
                    box.status = 'FAIL';
                    showNotification(`âš ï¸ TEMPERATURE ALERT: ${box.vaccine} (${box.id}) - ${box.currentTemp}Â°C`, 'alert');
                }
            });
        }
        
        function generateRandomAlert() {
            const alerts = [
                'New vaccine batch arrived at dock',
                'Route optimization suggested for JBâ†’SG',
                'Preventive maintenance due for cold storage unit',
                'Weather conditions may affect transport times'
            ];
            
            const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
            showNotification(randomAlert, 'info');
        }

        // Initialize Interactive Map
        function initializeInteractiveMap() {
            // Initialize map centered on Malaysia
            interactiveMap = L.map('interactive-map').setView([4.2105, 101.9758], 6);
            
            // Add tile layers
            const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Â© OpenStreetMap contributors'
            });
            
            const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            });
            
            // Add default layer
            streetLayer.addTo(interactiveMap);
            
            // Store layers for switching
            window.mapLayers = { street: streetLayer, satellite: satelliteLayer };
            
            // Add cold chain locations to map
            addColdChainMarkers();
        }

        // Add Cold Chain Markers
        function addColdChainMarkers() {
            coldChainLocations.forEach(location => {
                // Determine marker color based on status
                let markerColor;
                switch(location.status) {
                    case 'active': markerColor = '#5FA684'; break;
                    case 'warning': markerColor = '#ed8936'; break;
                    case 'alert': markerColor = '#e53e3e'; break;
                    default: markerColor = '#2C677B';
                }
                
                // Create custom marker
                const marker = L.circleMarker([location.lat, location.lng], {
                    radius: 8 + (location.count * 2), // Size based on number of VITABoxes
                    fillColor: markerColor,
                    color: '#ffffff',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(interactiveMap);
                
                // Create popup content
                const popupContent = `
                    <div style="font-family: 'Segoe UI', sans-serif; min-width: 200px;">
                        <h3 style="margin: 0 0 10px 0; color: #091F2F; font-size: 1.1rem;">${location.name}</h3>
                        <div style="display: grid; gap: 5px; font-size: 0.9rem;">
                            <div><strong>Status:</strong> <span style="color: ${markerColor}; text-transform: uppercase; font-weight: bold;">${location.status}</span></div>
                            <div><strong>VITABoxes:</strong> ${location.count} active</div>
                            <div><strong>Avg Temperature:</strong> ${location.temp}Â°C</div>
                            <div><strong>Location ID:</strong> ${location.id}</div>
                        </div>
                        <div style="margin-top: 10px; display: flex; gap: 5px; flex-wrap: wrap;">
                            <button onclick="navigateToLocation(${location.lat}, ${location.lng})" style="padding: 5px 10px; background: #2C677B; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Navigate</button>
                            <button onclick="viewOutboundShipment('${location.id}')" style="padding: 5px 10px; background: #ed8936; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">ðŸšš Track Shipment</button>
                        </div>
                    </div>
                `;
                
                marker.bindPopup(popupContent, {
                    maxWidth: 280,
                    className: 'custom-popup'
                });
                
                // Add hover effect
                marker.on('mouseover', function(e) {
                    this.setStyle({
                        radius: this.options.radius + 2,
                        weight: 3
                    });
                });
                
                marker.on('mouseout', function(e) {
                    this.setStyle({
                        radius: this.options.radius - 2,
                        weight: 2
                    });
                });
            });
        }

        // Map Control Functions
        function refreshMapData() {
            // Simulate data refresh
            const updateTime = document.getElementById('map-last-update');
            updateTime.textContent = new Date().toLocaleTimeString();
            
            // Add some visual feedback
            const refreshBtn = event.target;
            const originalText = refreshBtn.innerHTML;
            refreshBtn.innerHTML = 'ðŸ”„ Refreshing...';
            refreshBtn.disabled = true;
            
            setTimeout(() => {
                refreshBtn.innerHTML = originalText;
                refreshBtn.disabled = false;
                alert('Map data refreshed! All cold chain locations updated.');
            }, 1500);
        }

        function toggleMapView() {
            const toggleBtn = event.target;
            
            if (currentMapView === 'streets') {
                // Switch to satellite
                interactiveMap.removeLayer(window.mapLayers.street);
                interactiveMap.addLayer(window.mapLayers.satellite);
                toggleBtn.innerHTML = 'ðŸ—ºï¸ Streets';
                currentMapView = 'satellite';
            } else {
                // Switch to streets
                interactiveMap.removeLayer(window.mapLayers.satellite);
                interactiveMap.addLayer(window.mapLayers.street);
                toggleBtn.innerHTML = 'ðŸŒ Satellite';
                currentMapView = 'streets';
            }
        }

        function viewLocationDetails(locationId) {
            const location = coldChainLocations.find(loc => loc.id === locationId);
            if (location) {
                alert(`Viewing details for ${location.name}\n\nStatus: ${location.status.toUpperCase()}\nVITABoxes: ${location.count}\nAverage Temperature: ${location.temp}Â°C\nLocation ID: ${location.id}\n\nThis would open a detailed facility view in a production system.`);
            }
        }

        function navigateToLocation(lat, lng) {
            // Open Google Maps navigation
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
            window.open(googleMapsUrl, '_blank');
        }

        // Navigate to outbound shipment from map
        function viewOutboundShipment(locationId) {
            // Switch to outbound shipments page
            showPageDirectly('outbound');
            
            // Highlight the corresponding shipment
            setTimeout(() => {
                const targetRow = document.getElementById(`outbound-${locationId}`);
                if (targetRow) {
                    // Remove any existing highlights
                    document.querySelectorAll('#outbound-tbody tr').forEach(row => {
                        row.classList.remove('highlight-row');
                    });
                    
                    // Add highlight to target row
                    targetRow.classList.add('highlight-row');
                    targetRow.style.cssText += `
                        animation: highlightRow 3s ease-in-out;
                        border: 2px solid #5FA684;
                        box-shadow: 0 0 20px rgba(95, 166, 132, 0.3);
                    `;
                    
                    // Scroll to the shipment
                    targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Show notification
                    showNotification(`ðŸ“ Showing outbound shipment to ${coldChainLocations.find(loc => loc.id === locationId)?.name}`, 'success');
                    
                    // Remove highlight after animation
                    setTimeout(() => {
                        targetRow.style.animation = '';
                        targetRow.style.border = '';
                        targetRow.style.boxShadow = '';
                        targetRow.classList.remove('highlight-row');
                    }, 3000);
                } else {
                    showNotification(`âš ï¸ No outbound shipment found for this location`, 'info');
                }
            }, 100);
        }
