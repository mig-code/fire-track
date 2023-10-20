/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from 'react';
import './fires.filter.scss';

const FiresFilter = ({ setUrlFilter, setOffSetPage }) => {
  const formFromLocalStorage = JSON.parse(localStorage.getItem('form'));

  const initialForm = formFromLocalStorage || {
    provincia: '',
    estado: '',
    nivelMax: '',
    causa: '',
  };

  const [form, setForm] = useState(initialForm);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    // Reset the offset page to 0 when a filter is applied
    setOffSetPage(0);
  };

  // This helper function generates the encoder url to be used in the API call
  const generateCodedUrl = useCallback(() => {
    let url = '';
    if (form.provincia) {
      url +=
        '&refine=provincia%3A' + encodeURI(JSON.stringify(`${form.provincia}`));
    }
    if (form.estado) {
      url +=
        '&refine=situacion_actual%3A' +
        encodeURI(JSON.stringify(`${form.estado}`));
    }
    if (form.nivelMax) {
      url +=
        '&refine=nivel_maximo_alcanzado%3A' +
        encodeURI(JSON.stringify(`${form.nivelMax}`));
    }
    if (form.causa) {
      url +=
        '&refine=causa_probable%3A' +
        encodeURI(JSON.stringify(`${form.causa}`));
    }
    return url;
  }, [form]);

  useEffect(() => {
    // Set the url filter to be used in the API call
    setUrlFilter(generateCodedUrl());

    // Set the form in the local storage
    localStorage.setItem('form', JSON.stringify(form));
  }, [form, setUrlFilter, generateCodedUrl]);

  return (
    <div className='fires-filter'>
      <form className='fires-filter__form' action=''>
        <select
          name='provincia'
          value={form.provincia}
          onChange={handleSelectChange}
        >
          <option value=''>Provincia</option>
          <option value='ÁVILA'>ÁVILA</option>
          <option value='BURGOS'>BURGOS</option>
          <option value='LEÓN'>LEÓN</option>
          <option value='PALENCIA'>PALENCIA</option>
          <option value='SALAMANCA'>SALAMANCA</option>
          <option value='SEGOVIA'>SEGOVIA</option>
          <option value='SORIA'>SORIA</option>
          <option value='VALLADOLID'>VALLADOLID</option>
          <option value='ZAMORA'>ZAMORA</option>
        </select>
        <select name='estado' value={form.estado} onChange={handleSelectChange}>
          <option value=''>Estado</option>
          <option value='ACTIVO'>ACTIVO</option>
          <option value='CONTROLADO'>CONTROLADO</option>
          <option value='EXTINGUIDO'>EXTINGUIDO</option>
        </select>

        <select
          name='nivelMax'
          value={form.nivelMax}
          onChange={handleSelectChange}
        >
          <option value=''>Nivel Max.</option>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='SA: - SA:2'>SA: - SA:2</option>
        </select>
        <select name='causa' value={form.causa} onChange={handleSelectChange}>
          <option value=''>Causa probable</option>

          <option value='ACCIDENTAL (LÍNEAS ELÉCTRICAS)'>
            ACCIDENTAL (LÍNEAS ELÉCTRICAS)
          </option>
          <option value='ACCIDENTAL (MOTORES Y MÁQUINAS)'>
            ACCIDENTAL (MOTORES Y MÁQUINAS)
          </option>
          <option value='ACCIDENTAL (OTRAS ACTIVIDADES O USOS DEL MONTE)'>
            ACCIDENTAL (OTRAS ACTIVIDADES O USOS DEL MONTE)
          </option>
          <option value='ACCIDENTAL (QUEMA AGRÍCOLA)'>
            ACCIDENTAL (QUEMA AGRÍCOLA)
          </option>
          <option value='ACCIDENTAL (FERROCARRIL)'>
            ACCIDENTAL (FERROCARRIL)
          </option>
          <option value='CAUSAS DESCONOCIDAS'>CAUSAS DESCONOCIDAS</option>
          <option value='CAUSAS NATURALES'>CAUSAS NATURALES</option>
          <option value='CAUSAS ACCIDENTALES'>CAUSAS ACCIDENTALES</option>
          <option value='CAUSAS INTENCIONADAS'>CAUSAS INTENCIONADAS</option>
          <option value='CAUSAS SIN CLASIFICAR'>CAUSAS SIN CLASIFICAR</option>

          <option value='NEGLIGENCIAS (ELIMINACIÓN DE BASURAS Y RESTOS)'>
            NEGLIGENCIAS (ELIMINACIÓN DE BASURAS Y RESTOS)
          </option>
          <option value='NEGLIGENCIAS (FERROCARRIL)'>
            NEGLIGENCIAS (FERROCARRIL)
          </option>
          <option value='NEGLIGENCIAS (FUMADORES)'>
            NEGLIGENCIAS (FUMADORES)
          </option>
          <option value='NEGLIGENCIAS (HOGUERAS Y BARBACOAS)'>
            NEGLIGENCIAS (HOGUERAS Y BARBACOAS)
          </option>
          <option value='NEGLIGENCIAS (LIMPIEZAS DE VEGETACIÓN)'>
            NEGLIGENCIAS (LIMPIEZAS DE VEGETACIÓN)
          </option>
          <option value='NEGLIGENCIAS (LÍNEAS ELÉCTRICAS)'>
            NEGLIGENCIAS (LÍNEAS ELÉCTRICAS)
          </option>
          <option value='NEGLIGENCIAS (MOTORES Y MÁQUINAS)'>
            NEGLIGENCIAS (MOTORES Y MÁQUINAS)
          </option>
          <option value='NEGLIGENCIAS (OTRAS ACTIVIDADES O USOS DEL MONTE)'>
            NEGLIGENCIAS (OTRAS ACTIVIDADES O USOS DEL MONTE)
          </option>
          <option value='DESCONOCIDA'>DESCONOCIDA</option>
          <option value='DESCONOCIDO'>DESCONOCIDO</option>
          <option value='EN INVESTIGACION'>EN INVESTIGACION</option>
          <option value='EN INVESTIGACIÓN'>EN INVESTIGACIÓN</option>
          <option value='INTENCIONADO'>INTENCIONADO</option>
          <option value='MOTORES Y MÁQUINAS'>MOTORES Y MÁQUINAS</option>
        </select>
      </form>
    </div>
  );
};

export default FiresFilter;
