import { useState } from 'react';
import type { ClientProfile, TattooRecord } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { skinTones } from '../data/skinTones';
import { bodyZones } from '../data/bodyZones';
import { UserPlus, Edit2, Trash2, Plus, X, User, ChevronDown, ChevronUp } from 'lucide-react';

export default function ClientsPage() {
  const [clients, setClients] = useLocalStorage<ClientProfile[]>('bh-clients', []);
  const [showForm, setShowForm] = useState(false);
  const [editingClient, setEditingClient] = useState<ClientProfile | null>(null);
  const [expandedClient, setExpandedClient] = useState<string | null>(null);
  const [showTattooForm, setShowTattooForm] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    skinToneId: '',
    bodyNotes: '',
  });

  const [tattooForm, setTattooForm] = useState({
    zoneId: '',
    style: '',
    size: 'medium' as TattooRecord['size'],
    description: '',
    date: '',
    notes: '',
  });

  const resetForm = () => {
    setFormData({ name: '', skinToneId: '', bodyNotes: '' });
    setEditingClient(null);
    setShowForm(false);
  };

  const handleSaveClient = () => {
    if (!formData.name || !formData.skinToneId) return;

    if (editingClient) {
      setClients((prev) =>
        prev.map((c) =>
          c.id === editingClient.id
            ? { ...c, ...formData }
            : c
        )
      );
    } else {
      const newClient: ClientProfile = {
        id: Date.now().toString(),
        ...formData,
        measurements: {},
        existingTattoos: [],
        createdAt: new Date().toISOString(),
      };
      setClients((prev) => [...prev, newClient]);
    }
    resetForm();
  };

  const handleDeleteClient = (id: string) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  const handleEditClient = (client: ClientProfile) => {
    setFormData({
      name: client.name,
      skinToneId: client.skinToneId,
      bodyNotes: client.bodyNotes,
    });
    setEditingClient(client);
    setShowForm(true);
  };

  const handleAddTattoo = (clientId: string) => {
    if (!tattooForm.zoneId || !tattooForm.style) return;

    const newTattoo: TattooRecord = {
      id: Date.now().toString(),
      ...tattooForm,
    };

    setClients((prev) =>
      prev.map((c) =>
        c.id === clientId
          ? { ...c, existingTattoos: [...c.existingTattoos, newTattoo] }
          : c
      )
    );

    setTattooForm({ zoneId: '', style: '', size: 'medium', description: '', date: '', notes: '' });
    setShowTattooForm(null);
  };

  const handleRemoveTattoo = (clientId: string, tattooId: string) => {
    setClients((prev) =>
      prev.map((c) =>
        c.id === clientId
          ? { ...c, existingTattoos: c.existingTattoos.filter((t) => t.id !== tattooId) }
          : c
      )
    );
  };

  const getSkinToneName = (id: string) => {
    return skinTones.find((t) => t.id === id)?.nameEs || 'No especificado';
  };

  const getZoneName = (id: string) => {
    return bodyZones.find((z) => z.id === id)?.nameEs || id;
  };

  return (
    <div className="clients-page">
      <div className="page-header">
        <h1>Gestión de Clientes</h1>
        <p>Registra las características únicas de cada cliente para personalizar cada pieza</p>
      </div>

      <button className="add-client-btn" onClick={() => setShowForm(true)}>
        <UserPlus size={18} />
        Nuevo Cliente
      </button>

      {showForm && (
        <div className="modal-overlay" onClick={() => resetForm()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingClient ? 'Editar Cliente' : 'Nuevo Cliente'}</h2>
              <button className="close-btn" onClick={resetForm}>
                <X size={20} />
              </button>
            </div>

            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nombre del cliente"
              />
            </div>

            <div className="form-group">
              <label>Tono de Piel</label>
              <div className="tone-select">
                {skinTones.map((tone) => (
                  <button
                    key={tone.id}
                    className={`tone-option ${formData.skinToneId === tone.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, skinToneId: tone.id })}
                  >
                    <span className="tone-dot" style={{ background: tone.hexBase }} />
                    <span>{tone.nameEs}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Notas sobre el Cuerpo</label>
              <textarea
                value={formData.bodyNotes}
                onChange={(e) => setFormData({ ...formData, bodyNotes: e.target.value })}
                placeholder="Cicatrices, estrías, lunares importantes, alergias..."
                rows={4}
              />
            </div>

            <div className="form-actions">
              <button className="btn-secondary" onClick={resetForm}>Cancelar</button>
              <button
                className="btn-primary"
                onClick={handleSaveClient}
                disabled={!formData.name || !formData.skinToneId}
              >
                {editingClient ? 'Guardar Cambios' : 'Crear Cliente'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="clients-list">
        {clients.length === 0 ? (
          <div className="empty-state">
            <User size={48} />
            <h3>Sin clientes registrados</h3>
            <p>Agrega tu primer cliente para comenzar a personalizar tus diseños según sus características únicas.</p>
          </div>
        ) : (
          clients.map((client) => {
            const skinTone = skinTones.find((t) => t.id === client.skinToneId);
            const isExpanded = expandedClient === client.id;

            return (
              <div key={client.id} className={`client-card ${isExpanded ? 'expanded' : ''}`}>
                <div className="client-card-header" onClick={() => setExpandedClient(isExpanded ? null : client.id)}>
                  <div className="client-info">
                    <div className="client-avatar" style={{ background: skinTone?.hexBase || '#666' }}>
                      {client.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3>{client.name}</h3>
                      <span className="client-meta">
                        {getSkinToneName(client.skinToneId)} · {client.existingTattoos.length} tatuaje{client.existingTattoos.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <div className="client-actions">
                    <button onClick={(e) => { e.stopPropagation(); handleEditClient(client); }}>
                      <Edit2 size={16} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); handleDeleteClient(client.id); }}>
                      <Trash2 size={16} />
                    </button>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="client-card-body">
                    {client.bodyNotes && (
                      <div className="client-notes">
                        <h4>Notas del Cuerpo</h4>
                        <p>{client.bodyNotes}</p>
                      </div>
                    )}

                    {skinTone && (
                      <div className="client-skin-info">
                        <h4>Información de Piel</h4>
                        <div className="skin-quick-info">
                          <div>
                            <strong>Colores recomendados:</strong>
                            <div className="tag-list">
                              {skinTone.recommendedColors.slice(0, 4).map((c) => (
                                <span key={c} className="tag mini">{c}</span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <strong>Evitar:</strong>
                            <div className="tag-list">
                              {skinTone.avoidColors.map((c) => (
                                <span key={c} className="tag avoid mini">{c}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="client-tattoos">
                      <div className="tattoos-header">
                        <h4>Tatuajes Existentes ({client.existingTattoos.length})</h4>
                        <button
                          className="btn-small"
                          onClick={() => setShowTattooForm(showTattooForm === client.id ? null : client.id)}
                        >
                          <Plus size={14} /> Agregar
                        </button>
                      </div>

                      {showTattooForm === client.id && (
                        <div className="tattoo-form">
                          <div className="form-row">
                            <div className="form-group">
                              <label>Zona</label>
                              <select
                                value={tattooForm.zoneId}
                                onChange={(e) => setTattooForm({ ...tattooForm, zoneId: e.target.value })}
                              >
                                <option value="">Seleccionar zona</option>
                                {bodyZones.map((zone) => (
                                  <option key={zone.id} value={zone.id}>{zone.nameEs}</option>
                                ))}
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Estilo</label>
                              <input
                                type="text"
                                value={tattooForm.style}
                                onChange={(e) => setTattooForm({ ...tattooForm, style: e.target.value })}
                                placeholder="Ej: Neo-tradicional"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Tamaño</label>
                              <select
                                value={tattooForm.size}
                                onChange={(e) => setTattooForm({ ...tattooForm, size: e.target.value as TattooRecord['size'] })}
                              >
                                <option value="small">Pequeño</option>
                                <option value="medium">Mediano</option>
                                <option value="large">Grande</option>
                                <option value="full">Completo</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Fecha</label>
                              <input
                                type="date"
                                value={tattooForm.date}
                                onChange={(e) => setTattooForm({ ...tattooForm, date: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Descripción</label>
                            <input
                              type="text"
                              value={tattooForm.description}
                              onChange={(e) => setTattooForm({ ...tattooForm, description: e.target.value })}
                              placeholder="Descripción breve del tatuaje"
                            />
                          </div>
                          <div className="form-group">
                            <label>Notas</label>
                            <textarea
                              value={tattooForm.notes}
                              onChange={(e) => setTattooForm({ ...tattooForm, notes: e.target.value })}
                              placeholder="Cómo curó, retoques necesarios, etc."
                              rows={2}
                            />
                          </div>
                          <div className="form-actions">
                            <button className="btn-secondary" onClick={() => setShowTattooForm(null)}>Cancelar</button>
                            <button
                              className="btn-primary"
                              onClick={() => handleAddTattoo(client.id)}
                              disabled={!tattooForm.zoneId || !tattooForm.style}
                            >
                              Guardar Tatuaje
                            </button>
                          </div>
                        </div>
                      )}

                      {client.existingTattoos.length > 0 && (
                        <div className="tattoo-list">
                          {client.existingTattoos.map((tattoo) => (
                            <div key={tattoo.id} className="tattoo-item">
                              <div className="tattoo-item-info">
                                <strong>{getZoneName(tattoo.zoneId)}</strong>
                                <span>{tattoo.style} · {tattoo.size === 'small' ? 'Pequeño' : tattoo.size === 'medium' ? 'Mediano' : tattoo.size === 'large' ? 'Grande' : 'Completo'}</span>
                                {tattoo.description && <p>{tattoo.description}</p>}
                              </div>
                              <button
                                className="remove-tattoo-btn"
                                onClick={() => handleRemoveTattoo(client.id, tattoo.id)}
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
