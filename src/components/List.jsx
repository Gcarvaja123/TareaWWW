import { motion } from 'framer-motion';

export const List = ({ encuestas }) => {
    return (
        <div className="list">
            <motion.ul layout>
                <h1>Encuestas ingresadas</h1>
                {encuestas.map((encuesta) => (
                    <li>
                        <strong>{encuesta.Titulo}:</strong>
                        <span>{encuesta.Descripcion}</span>
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}
