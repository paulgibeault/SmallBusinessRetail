// src/lib/db.test.ts
import {
  getAllTreats,
  getTreatById,
  createTreat,
  updateTreat,
  deleteTreat,
  Treat,
} from './db';

describe('Database Functions', () => {
  beforeEach(async () => {
    const treats = await getAllTreats();
    for(const treat of treats) {
        await deleteTreat(treat.id)
    }
  });

  it('should get all treats', async () => {
    await createTreat({ name: 'Test Treat', description: 'Test', price: 1, quantity_available: 10, is_sold_out: false, image_url: '' });
    const treats = await getAllTreats();
    expect(treats.length).toBe(1);
    expect(treats[0].name).toBe('Test Treat');
  });

  it('should get a treat by ID', async () => {
    const newTreat = await createTreat({ name: 'Test Treat', description: 'Test', price: 1, quantity_available: 10, is_sold_out: false, image_url: '' });
    const treat = await getTreatById(newTreat.id);
    expect(treat).not.toBeNull();
    expect(treat?.name).toBe('Test Treat');
  });

  it('should create a treat', async () => {
    const newTreatData: Omit<Treat, 'id'> = { name: 'New Treat', description: 'New', price: 2, quantity_available: 20, is_sold_out: false, image_url: '' };
    const newTreat = await createTreat(newTreatData);
    expect(newTreat.name).toBe('New Treat');
    expect(newTreat.id).toBeDefined();
  });

  it('should update a treat', async () => {
    const newTreat = await createTreat({ name: 'Test Treat', description: 'Test', price: 1, quantity_available: 10, is_sold_out: false, image_url: '' });
    const updatedTreat = await updateTreat(newTreat.id, { name: 'Updated Treat' });
    expect(updatedTreat).not.toBeNull();
    expect(updatedTreat?.name).toBe('Updated Treat');
  });

  it('should delete a treat', async () => {
    const newTreat = await createTreat({ name: 'Test Treat', description: 'Test', price: 1, quantity_available: 10, is_sold_out: false, image_url: '' });
    const result = await deleteTreat(newTreat.id);
    expect(result).toBe(true);
    const treat = await getTreatById(newTreat.id);
    expect(treat).toBeNull();
  });

  it('should return null when getting a non-existent treat', async () => {
    const treat = await getTreatById('non-existent-id');
    expect(treat).toBeNull();
  });

  it('should return false when deleting a non-existent treat', async () => {
    const result = await deleteTreat('non-existent-id');
    expect(result).toBe(false);
  });
    it('should return null when updating a non-existent treat', async () => {
        const updatedTreat = await updateTreat('non-existent-id', { name: 'Updated Treat' });
        expect(updatedTreat).toBeNull();
      });
});