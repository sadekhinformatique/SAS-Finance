import { Member, Transaction, AuditLog } from './types';

export const MOCK_MEMBERS: Member[] = [
  { id: '2024-TR-01', name: 'Thomas Rochefort', role: 'TRÉSORIER' },
  { id: '2024-LB-42', name: 'Léa Bernard', role: 'MEMBRE', avatar: 'https://picsum.photos/seed/lea/100/100' },
  { id: '2024-JD-18', name: 'Julien Dupont', role: 'MEMBRE', avatar: 'https://picsum.photos/seed/julien/100/100' },
  { id: '2024-SM-02', name: 'Sarah Martin', role: 'PRÉSIDENTE' },
  { id: '2024-AH-77', name: 'Amine Haddad', role: 'MEMBRE', avatar: 'https://picsum.photos/seed/amine/100/100' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Vente Billetterie Gala',
    amount: 450.00,
    date: "Aujourd'hui",
    time: '14:20',
    type: 'REVENU',
    category: 'Entrée',
    source: 'HelloAsso'
  },
  {
    id: '2',
    title: 'Déjeuner Equipe',
    amount: -45.50,
    date: "Aujourd'hui",
    time: '12:45',
    type: 'DÉPENSE',
    category: 'Nourriture',
    member: 'Thomas L.'
  },
  {
    id: '3',
    title: 'Fournitures Bureau',
    amount: -24.99,
    date: 'Hier',
    time: '09:15',
    type: 'DÉPENSE',
    category: 'Fournitures',
    member: 'Marc A.'
  },
  {
    id: '4',
    title: 'Cotisations Membres',
    amount: 240.00,
    date: "Aujourd'hui",
    time: '10:20',
    type: 'REVENU',
    category: 'Entrée',
    source: 'HelloAsso'
  },
  {
    id: '5',
    title: 'Location Camionnette',
    amount: -89.00,
    date: 'Hier',
    time: '16:30',
    type: 'DÉPENSE',
    category: 'Transport',
    member: 'Sarah K.'
  },
  {
    id: '6',
    title: 'Sponsoring Entreprise X',
    amount: 1200.00,
    date: '20 Oct',
    time: '11:00',
    type: 'REVENU',
    category: 'Entrée',
    source: 'Entreprise X'
  },
  {
    id: '7',
    title: 'Impressions Flyers',
    amount: -85.50,
    date: '18 Oct',
    time: '15:45',
    type: 'DÉPENSE',
    category: 'Communication',
    member: 'Emma D.'
  }
];

export const MOCK_AUDIT_LOGS: AuditLog[] = [
  {
    id: '1',
    user: 'Jean Dupont (Trésorier)',
    action: 'a approuvé la dépense',
    target: '#102',
    timestamp: "AUJOURD'HUI, 14:32",
    type: 'success'
  },
  {
    id: '2',
    user: 'Marie Curie (Admin)',
    action: 'a modifié les droits d\'accès de',
    target: 'L. Pasteur',
    timestamp: 'HIER, 10:15',
    type: 'info'
  },
  {
    id: '3',
    user: 'Système',
    action: 'Tentative de connexion échouée depuis',
    target: 'Paris, FR',
    timestamp: '12 OCT, 23:45',
    type: 'warning'
  }
];

export const PENDING_APPROVALS: Transaction[] = [
  {
    id: '101',
    title: 'Achat de rames de papier',
    amount: -45.00,
    date: '12 Oct 2023',
    time: '10:00',
    type: 'DÉPENSE',
    category: 'Fournitures',
    member: 'Jean Dupont',
    description: 'Achat de rames de papier et stylos pour le bureau de l\'association. Facture Bureau Vallée.',
    status: 'En attente',
    receiptUrl: 'https://picsum.photos/seed/receipt1/400/300'
  },
  {
    id: '102',
    title: 'Buffet soirée accueil',
    amount: -120.50,
    date: '14 Oct 2023',
    time: '18:00',
    type: 'DÉPENSE',
    category: 'Événement',
    member: 'Marie Curie',
    description: 'Buffet pour la soirée d\'accueil des nouveaux arrivants.',
    status: 'En attente',
    receiptUrl: 'https://picsum.photos/seed/receipt2/400/300'
  },
  {
    id: '103',
    title: 'Trajet Uber matériel',
    amount: -15.20,
    date: 'Hier',
    time: '14:00',
    type: 'DÉPENSE',
    category: 'Transport',
    member: 'Lucas Bernard',
    description: 'Trajet Uber pour transport de matériel lourd vers le campus.',
    status: 'En attente',
    receiptUrl: 'https://picsum.photos/seed/receipt3/400/300'
  }
];
