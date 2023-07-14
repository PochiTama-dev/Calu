import { useState } from 'react';
import { Header } from '../Header/header';
import servicios from '../Services/constants';
import './AdminCrud.css';
import { addServicios } from '../../firebase-config';

const AdminCrud = () => {
  const [services, setServices] = useState(servicios);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [blur, setBlur] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    sub: '',
    des_1: '',
    des_3: '',
    img: '',
  });
  const [formEdit, setFormEdit] = useState(null);
  const [editItem, setEditItem] = useState(null);

  addServicios();

  const closeModal = () => {
    setModal(false);
    setBlur(false);
  };

  const handleAdd = () => {
    setModal(true);
    setBlur(true);
  };

  const handleEdit = (id) => {
    const servicio = services.find((servicio) => servicio.id === id);
    if (servicio) {
      setFormEdit(servicio);
      setEditItem(id);
      setModalEdit(true);
      setBlur(true);
    }
  };

  const handleChangeEdit = (event) => {
    const { name, value } = event.target;
    setFormEdit((prevFormEdit) => ({
      ...prevFormEdit,
      [name]: value,
    }));
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    if (editItem) {
      const updatedServices = services.map((service) => {
        if (service.id === editItem) {
          setFormEdit({
            title: service.title,
            sub: service.sub,
            des_1: service.des_1,
            des_3: service.des_3,
            img: service.img,
          });
        }
        return formEdit;
      });
      setServices(updatedServices);
      setFormEdit(null);
      setEditItem(null);
    }
    setModalEdit(false);
    setBlur(false);
  };

  const handleDelete = (serviceId) => {
    const updatedServices = services.filter((service) => service.id !== serviceId);
    setServices(updatedServices);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: LLEVAR LOS DATOS A COLECCION DE SERVICIOS
    //db.ref('servicios').push(formData)

    // Verifico los datos
    //console.log(formData);

    setFormData({
      id: 0,
      title: '',
      sub: '',
      des_1: '',
      des_3: '',
      img: '',
    });
  };
  return (
    <div>
      <Header />
      <div className='services'>
        <div className={blur ? 'crudBlur' : 'crudContainer'}>
          <ul className='crudTags'>
            <li>ID</li>
            <li>Titulo</li>
            <li>Descripcion</li>
            <li>Imagen</li>
          </ul>
          <ul className='crudItems'>
            {servicios.map((servicio, index) => {
              const fullDescription = `${servicio.des_1} ${servicio.des_2} ${servicio.des_3}`;
              const words = fullDescription.split(' ');
              const truncatedWords = words.slice(0, 7);
              const truncatedDescription = truncatedWords.join(' ');
              const description =
                words.length > 7 ? `${truncatedDescription}...` : truncatedDescription;
              return (
                <li key={index}>
                  <div className='crudDescription'>
                    <div> {servicio.id}</div>
                    <div className='crudTitle'>{servicio.title}</div>
                    <div className='crudText'>{description}</div>
                    <div className='crudImage'>{servicio.img}</div>
                    <div>
                      <button onClick={() => handleEdit(servicio.id)}>Editar</button>
                      <button onClick={() => handleDelete(servicio.id)}>Borrar</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={handleAdd}>Agregar</button>
      </div>
      {/* MODAL AGREGAR */}
      {modal && (
        <div className='modal'>
          <h2 onClick={closeModal}>X</h2>

          <form action='//' method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
            <label htmlFor='title'>Titulo </label>
            <input
              type='text'
              name='title'
              id='title'
              value={formData.title}
              onChange={handleChange}
            />
            <label htmlFor='sub'>Subtitulo </label>
            <input type='text' name='sub' id='' value={formData.sub} onChange={handleChange} />
            <label htmlFor='des_1'>Descripcion 1 </label>
            <textarea
              name='des_1'
              id=''
              cols='10'
              rows='10'
              value={formData.des_1}
              onChange={handleChange}
            ></textarea>
            <label htmlFor='des_3'>Descripcion 3</label>
            <textarea
              name='des_3'
              id=''
              cols='10'
              rows='10'
              value={formData.des_3}
              onChange={handleChange}
            ></textarea>
            <label htmlFor='img'>Imagen </label>
            <input type='file' name='img' id='img' onChange={handleChange} />
            <button type='submit' onClick={closeModal}>
              Agregar nuevo Servicio
            </button>
            <button type='reset'>Reiniciar</button>
          </form>
        </div>
      )}
      {/* MODAL Editar */}
      {modalEdit && (
        <div className='modal'>
          <h2 onClick={closeModal}>X</h2>

          <form action='//' method='POST' encType='multipart/form-data' onSubmit={handleSubmitEdit}>
            <label htmlFor='title'>Titulo </label>
            <input
              type='text'
              name='title'
              id='title'
              value={formEdit.title}
              onChange={handleChangeEdit}
            />
            <label htmlFor='sub'>Subtitulo </label>
            <input type='text' name='sub' id='' value={formEdit.sub} onChange={handleChangeEdit} />
            <label htmlFor='des_1'>Descripcion 1 </label>
            <textarea
              name='des_1'
              id=''
              cols='10'
              rows='10'
              value={formEdit.des_1}
              onChange={handleChangeEdit}
            ></textarea>
            <label htmlFor='des_3'>Descripcion 3</label>
            <textarea
              name='des_3'
              id=''
              cols='10'
              rows='10'
              value={formEdit.des_3}
              onChange={handleChangeEdit}
            ></textarea>
            <label htmlFor='img'>Imagen </label>
            <input
              type='file'
              name='img'
              id='img'
              value={formEdit.img}
              onChange={handleChangeEdit}
            />
            <button type='submit' onClick={closeModal}>
              Agregar nuevo Servicio
            </button>
            <button type='reset'>Reiniciar</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AdminCrud;
