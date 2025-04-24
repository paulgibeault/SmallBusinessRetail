// src/lib/db.ts

import { v4 as uuidv4 } from 'uuid';

export interface Treat {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity_available: number;
  is_sold_out: boolean;
  image_url: string;
}

// Stubbed data - Replace with file-based persistence later
let treats: Treat[] = [
  {
    id: uuidv4(),
    name: 'Chocolate Chip Cookie',
    description: 'Classic chocolate chip cookie.',
    price: 2.5,
    quantity_available: 100,
    is_sold_out: false,
    image_url: ''
  },
  {
    id: uuidv4(),
    name: 'Brownie',
    description: 'Fudgy chocolate brownie.',
    price: 3.0,
    quantity_available: 50,
    is_sold_out: false,
    image_url: ''
  },
  {
    id: uuidv4(),
    name: "Macaron",
    description: "Assorted French macarons",
    price: 4.0,
    quantity_available: 20,
    is_sold_out: false,
    image_url: ''
  }
];

// Stubbed Database Functions
export async function getAllTreats(): Promise<Treat[]> {
  return treats;
}

export async function getTreatById(id: string): Promise<Treat | null> {
  const treat = treats.find((t) => t.id === id);
  return treat || null;
}

export async function createTreat(data: Omit<Treat, 'id'>): Promise<Treat> {
  const newTreat: Treat = { id: uuidv4(), ...data };
  treats.push(newTreat);
  return newTreat;
}

export async function updateTreat(id: string, data: Partial<Treat>): Promise<Treat | null> {
  const index = treats.findIndex((t) => t.id === id);
  if (index === -1) {
    return null;
  }
  treats[index] = { ...treats[index], ...data };
  return treats[index];
}

export async function deleteTreat(id: string): Promise<boolean> {
  const index = treats.findIndex((t) => t.id === id);
  if (index === -1) {
    return false;
  }
  treats.splice(index, 1);
  return true;
}