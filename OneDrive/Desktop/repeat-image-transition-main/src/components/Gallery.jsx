import { useEffect, useRef, useState } from 'react';

// Vite image imports that perfectly match original require() behavior
const imageImports = import.meta.glob('../assets/images/img*.webp', { eager: true });
const images = Array.from({ length: 31 }, (_, i) => {
  return imageImports[`../assets/images/img${i + 1}.webp`]?.default;
});

// COMPLETE ORIGINAL GALLERY DATA STRUCTURE - 100% UNCHANGED
const galleries = [
  {
    title: 'Shane Weber',
    meta: 'effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.',
    items: [
      { src: images[0], title: 'Drift — A04', model: 'Amelia Hart' },
      { src: images[1], title: 'Veil — K18', model: 'Irina Volkova' },
      { src: images[2], title: 'Ember — M45', model: 'Charlotte Byrne' },
      { src: images[3], title: 'Gleam — S12', model: 'Anastasia Morozova' },
      { src: images[4], title: 'Bloom — J29', model: 'Eva Ramirez' },
      { src: images[5], title: 'Whisper — V87', model: 'Milana Petrova' },
      { src: images[6], title: 'Trace — Z05', model: 'Sofia Carter' },
      { src: images[7], title: 'Flicker — Q62', model: 'Alina Kuznetsova' },
      { src: images[8], title: 'Grain — H71', model: 'Isabella Novak' },
      { src: images[9], title: 'Pulse — B90', model: 'Daria Sokolova' },
      { src: images[10], title: 'Mist — L36', model: 'Victoria Fields' },
      { src: images[11], title: 'Shard — Y22', model: 'Natalia Popova & Emily Stone' },
      { src: images[12], title: 'Vapor — X79', model: 'Yulia Orlova' },
      { src: images[13], title: 'Glow — F13', model: 'Camila Ford' },
      { src: images[14], title: 'Flux — N48', model: 'Sofia Mikhailova' },
      { src: images[15], title: 'Spire — C65', model: 'Ava Bennett' },
    ],
  },
  {
    title: 'Manika Jorge',
    meta: 'effect 02: Adjusts mover count, rotation, timing, and animation feel.',
    items: [
      {
        src: images[16],
        title: 'Driftwood — W50',
        model: 'Valeria Smirnova',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[17],
        title: 'Fold — T81',
        model: 'Emma Chase',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[18],
        title: 'Shroud — E26',
        model: 'Marina Belova',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[19],
        title: 'Ripple — P34',
        model: 'Chloe Martin',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[20],
        title: 'Fray — U07',
        model: 'Alexandra Dmitrieva',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[21],
        title: 'Wane — R52',
        model: 'Isabella Moore',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[22],
        title: 'Tide — S33',
        model: 'Ksenia Egorova',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[23],
        title: 'Rift — G08',
        model: 'Mia Anderson',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[24],
        title: 'Spool — H94',
        model: 'Anna Mikhailova',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[25],
        title: 'Glitch — M70',
        model: 'Emily Brown',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[26],
        title: 'Slip — F02',
        model: 'Ekaterina Ivanova',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[27],
        title: 'Husk — C15',
        model: 'Olivia Reed',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[28],
        title: 'Blur — V86',
        model: 'Sofia Lebedeva',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[29],
        title: 'Fracture — A63',
        model: 'Harper Gray',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[30],
        title: 'Mote — Y39',
        model: 'Elizaveta Petrova',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
      {
        src: images[0],
        title: 'Aura — K21',
        model: 'Lily Cooper',
        data: {
          steps: 8,
          rotationRange: 7,
          stepInterval: 0.05,
          moverPauseBeforeExit: 0.25,
          moverEnterEase: 'sine.in',
          moverExitEase: 'power2',
          panelRevealEase: 'power2',
        },
      },
    ],
  },
  {
    title: 'Angela Wong',
    meta: 'effect 03: Big arcs, smooth start, powerful snap, slow reveal.',
    items: [
      {
        src: images[0],
        title: 'Whorl — B45',
        model: 'Anastasia Volkova',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[1],
        title: 'Flicker — D17',
        model: 'Sophia White',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[2],
        title: 'Gleam — Z58',
        model: 'Polina Sokolova',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[3],
        title: 'Shard — J03',
        model: 'Ava Mitchell',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[4],
        title: 'Trace — Q29',
        model: 'Maria Ivanenko',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[5],
        title: 'Crush — W92',
        model: 'Ella Foster',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[6],
        title: 'Veil — X16',
        model: 'Yulia Morozova',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[7],
        title: 'Clasp — S84',
        model: 'Charlotte Hayes',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[8],
        title: 'Flint — T66',
        model: 'Viktoria Kuznetsova',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[9],
        title: 'Spire — E49',
        model: 'Amelia Parker',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[10],
        title: 'Plume — N22',
        model: 'Daria Smirnova',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[11],
        title: 'Hollow — B75',
        model: 'Zoe Adams',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[12],
        title: 'Brume — K10',
        model: 'Anastasiya Orlova',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[13],
        title: 'Crave — F37',
        model: 'Mia Bennett',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[14],
        title: 'Quiver — R19',
        model: 'Natalia Volkova',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
      {
        src: images[15],
        title: 'Fathom — L52',
        model: 'Isabella Young',
        data: {
          steps: 10,
          stepDuration: 0.3,
          pathMotion: 'sine',
          sineAmplitude: 300,
          clipPathDirection: 'left-right',
          autoAdjustHorizontalClipPath: true,
          stepInterval: 0.07,
          moverPauseBeforeExit: 0.3,
          moverEnterEase: 'sine',
          moverExitEase: 'power4',
          panelRevealEase: 'power4',
          panelRevealDurationFactor: 4,
        },
      },
    ],
  },
  {
    title: 'Kaito Nakamo',
    meta: 'effect 04: Quick upward motion with bold blending and smooth slow reveal.',
    items: [
      {
        src: images[15],
        title: 'Pulse — D61',
        model: 'Sofia Makarova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[16],
        title: 'Fade — P42',
        model: 'Scarlett James',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[17],
        title: 'Wisp — T14',
        model: 'Ekaterina Romanova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[18],
        title: 'Fragment — G77',
        model: 'Aria Robinson',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[19],
        title: 'Spiral — Y24',
        model: 'Daria Petrova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[20],
        title: 'Trace — Z85',
        model: 'Chloe Evans',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[21],
        title: 'Flare — C11',
        model: 'Sofia Orlova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[22],
        title: 'Chasm — R05',
        model: 'Grace Walker',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[23],
        title: 'Bloom — N38',
        model: 'Yana Melnikova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[24],
        title: 'Shard — W20',
        model: 'Mila Scott',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[25],
        title: 'Mist — S12',
        model: 'Natalia Ivanova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[26],
        title: 'Crush — E31',
        model: 'Ava Thompson',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[27],
        title: 'Ripple — F68',
        model: 'Anastasia Novikova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[28],
        title: 'Gossamer — A07',
        model: 'Madison Brooks',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[29],
        title: 'Floe — K96',
        model: 'Ekaterina Smirnova',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
      {
        src: images[30],
        title: 'Shiver — V44',
        model: 'Emily Robinson',
        data: {
          steps: 4,
          clipPathDirection: 'bottom-top',
          stepDuration: 0.25,
          stepInterval: 0.06,
          moverPauseBeforeExit: 0.2,
          moverEnterEase: 'sine.in',
          moverExitEase: 'expo',
          panelRevealEase: 'expo',
          panelRevealDurationFactor: 4,
          moverBlendMode: 'hard-light',
        },
      },
    ],
  },
];

const Gallery = () => {
  const galleryRef = useRef(null);
  const panelRef = useRef(null);
  const lenisRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const initGallery = async () => {
      try {
        // Load Lenis via script tag instead of ESM import
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = '/js/lenis.min.js'; // Adjust path if needed
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });

        // Now Lenis is available globally
        if (typeof window.Lenis === 'function') {
          lenisRef.current = new window.Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false
          });

          const raf = (time) => {
            lenisRef.current?.raf(time);
            animationFrameId = requestAnimationFrame(raf);
          };
          animationFrameId = requestAnimationFrame(raf);
        }

        // Replace the import with this code
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = '/js/utils.js';
          script.onload = () => {
            // Small delay to ensure utils are loaded
            setTimeout(() => {
              if (window.preloadImages) {
                window.preloadImages('.grid__item-image, .panel__img').then(resolve);
              } else {
                console.error('preloadImages not found');
                resolve();
              }
            }, 100);
          };
          script.onerror = () => {
            console.error('Failed to load utils.js');
            resolve();
          };
          document.body.appendChild(script);
        });

        document.body.classList.remove('loading');
        setIsReady(true);
      } catch (error) {
        console.error('Initialization error:', error);
        document.body.classList.remove('loading');
        setIsReady(true);
      }
    };

    initGallery();

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenisRef.current?.destroy();
    };
  }, []);

  // Add this useEffect to dispatch the panelReady event
  useEffect(() => {
    if (panelRef.current) {
      console.log('Panel element is available:', panelRef.current);
      // Add a small timeout to ensure the panel is fully rendered
      const timer = setTimeout(() => {
        const event = new CustomEvent('panelReady', {
          detail: panelRef.current,
          bubbles: true,
          cancelable: true
        });
        console.log('Dispatching panelReady event');
        window.dispatchEvent(event);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [panelRef.current]);

  // COMPLETE ORIGINAL JSX STRUCTURE - 100% UNCHANGED
  return (
    <main ref={galleryRef}>
      <header className="frame">
        <h1 className="frame__title">Repeating Image Transition</h1>
        <nav className="frame__links">
          <a className="line" href="https://tympanus.net/codrops/?p=92571">More info</a>
          <a className="line" href="https://github.com/codrops/RepeatingImageTransition/">Code</a>
          <a className="line" href="https://tympanus.net/codrops/demos/">All demos</a>
        </nav>
        <nav className="frame__tags">
          <a className="line" href="https://tympanus.net/codrops/demos/?tag=page-transition">page-transition</a>
          <a className="line" href="https://tympanus.net/codrops/demos/?tag=repetition">repetition</a>
          <a className="line" href="https://tympanus.net/codrops/demos/?tag=grid">grid</a>
        </nav>
      </header>

      {galleries.map((gallery, galleryIndex) => (
        <div key={gallery.title}>
          <div className="heading">
            <h2 className="heading__title">{gallery.title}</h2>
            <span className="heading__meta">{gallery.meta}</span>
          </div>
          <div className="grid">
            {gallery.items.map((item, itemIndex) => {
              // Process data attributes with proper error handling
              const dataAttributes = {};
              if (item.data) {
                Object.entries(item.data).forEach(([key, value]) => {
                  const attrName = `data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
                  dataAttributes[attrName] = value;
                });
              }

              return (
                <figure
                  key={`${galleryIndex}-${itemIndex}`}
                  className="grid__item"
                  role="img"
                  aria-labelledby={`caption${galleryIndex * 16 + itemIndex + 1}`}
                  {...dataAttributes}
                >
                  <div
                    className="grid__item-image"
                    style={{ backgroundImage: `url(${item.src})` }}
                  ></div>
                  <figcaption
                    className="grid__item-caption"
                    id={`caption${galleryIndex * 16 + itemIndex + 1}`}
                  >
                    <h3>{item.title}</h3>
                    <p>Model: {item.model}</p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      ))}

      <figure
        className="panel"
        role="img"
        aria-labelledby="caption"
        ref={panelRef}
        style={{ opacity: 0 }}
      >
        <div
          className="panel__img"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        <figcaption className="panel__content" id="caption">
          <h3>murmur—207</h3>
          <p>
            Beneath the soft static of this lies a fragmented recollection of
            motion—faded pulses echoing through time-warped layers of light and
            silence. A stillness wrapped in artifact.
          </p>
          <button
            type="button"
            className="panel__close"
            aria-label="Close preview"
          >
            Close
          </button>
        </figcaption>
      </figure>

      <footer className="frame frame--footer">
        <span>
          Made by <a href="https://codrops.com/" className="line">@codrops</a>
        </span>
        <span>
          <a href="https://tympanus.net/codrops/demos/" className="line">
            All demos
          </a>
        </span>
      </footer>
    </main>
  );
};

export default Gallery;