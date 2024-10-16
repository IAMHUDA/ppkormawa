import React, { useState, useEffect } from 'react';

function TypingEffect({ text, speed, pauseTime }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false); // Menambah state untuk menghapus teks
  const [index, setIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Jika sedang mengetik, tambahkan karakter ke teks yang sedang ditampilkan
        setDisplayedText((prev) => text.slice(0, index + 1));
        setIndex(index + 1);

        if (index === text.length) {
          // Jika sudah selesai mengetik seluruh teks, tunggu sebentar lalu mulai menghapus
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Jika sedang menghapus, kurangi karakter dari teks yang sedang ditampilkan
        setDisplayedText((prev) => text.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          // Jika teks sudah dihapus sepenuhnya, mulai lagi mengetik dari awal
          setIsDeleting(false);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [index, isDeleting, text, typingSpeed, pauseTime]);

  return <span>{displayedText}</span>;
}

export default TypingEffect;
