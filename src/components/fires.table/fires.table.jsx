/* eslint-disable react/prop-types */
import './fires.table.scss';

const FiresTable = ({ fires }) => {
  return (
    <section className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Nº mapa</th>
            <th>Situación</th>
            <th>Provincia</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Nivel Máx.</th>
            <th>Causa probable</th>
            <th>Coordenadas</th>

            <th>Fecha de ext.</th>
            <th>Hora de ext.</th>
            <th>CP</th>
            <th>Municipio</th>
            <th>Superficie afectada</th>
            <th>Medios</th>
          </tr>
        </thead>
        {fires.length > 0 && (
          <tbody>
            {fires.map((fire, i) => (
              <tr key={fire.id}>
                <td>{i + 1}</td>
                <td>{fire.situacion_actual}</td>
                <td>{fire.provincia.map((prov) => prov).join(' - ')}</td>
                <td>{fire.fecha_del_parte.split('-').reverse().join('/')}</td>
                <td>{fire.hora_del_parte}</td>
                <td>{fire.nivel_maximo_alcanzado}</td>
                <td>{fire.causa_probable}</td>
                <td>
                  {fire.posicion?.lat.toFixed(6)}
                  {fire.posicion?.lon.toFixed(6)}
                </td>
                <td>{fire.fecha_extinguido?.split('-').reverse().join('/')}</td>
                <td>{fire.hora_extinguido}</td>
                <td>{fire.codigo_municipio_ine}</td>
                <td>
                  {fire.termino_municipal !== 'SIN INCIDENCIAS'
                    ? fire.termino_municipal
                    : 'No disponible'}
                </td>
                <td>{fire.tipo_y_has_de_superficie_afectada}</td>
                <td>{fire.medios_de_extincion}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </section>
  );
};

export default FiresTable;
