import React, { useState, useEffect } from 'react';

interface TypeI {
    text: string;
}

const TypeAndDelete: React.FC<TypeI> = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [typingSpeed, setTypingSpeed] = useState(200); // Velocidade inicial de digitação
    const [deletingSpeed, setDeletingSpeed] = useState(100); // Velocidade de apagamento

    useEffect(() => {
        let i = 0;
        let isDeleting = false;

        function type() {
            const currentText = text.substring(0, i);
            setDisplayText(currentText);

            if (i === text.length) {
                setTimeout(() => {
                    isDeleting = true;
                    setDeletingSpeed(25); // Aumenta a velocidade de apagamento
                }, 500); // Espera meio segundo antes de começar a apagar
            }

            if (i === 0 && isDeleting) {
                setTimeout(() => {
                    isDeleting = false;
                    setTypingSpeed(100); // Retorna a velocidade de digitação ao valor inicial
                }, 500); // Espera meio segundo antes de começar a escrever novamente
            }

            if (isDeleting) {
                i--;
            } else {
                i++;
            }

            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }

        type();

        // Função de limpeza opcional para parar o loop quando o componente for desmontado
        return () => {
            // Não é necessário limpar o timeout porque estamos usando setTimeout recursivo
        };
    }, [text]);

    return (
        <div>
            {/* Renderiza o texto na tela */}
            {displayText}
        </div>
    );
};

export default TypeAndDelete;
