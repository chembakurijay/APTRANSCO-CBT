const TEST_COUNT = 20;
const QUESTIONS_PER_TEST = 100;

const civilBlueprint = [
    {
        subject: 'Strength of Materials',
        count: 15,
        topics: [
            'Stress and Strain',
            'Bending Moment',
            'Shear Force',
            'Torsion',
            'Deflection',
            'Combined Stresses',
            'Columns and Shafts',
            'Beam Theory',
            'Material Properties',
        ],
        templates: [
            (data) => ({
                question: `A ${data.diameter} mm diameter steel rod is subjected to tensile load ${data.load} kN. What is the normal stress in the rod?`,
                options: [
                    `${data.stress.toFixed(1)} MPa`,
                    `${(data.stress * 0.9).toFixed(1)} MPa`,
                    `${(data.stress * 1.1).toFixed(1)} MPa`,
                    `${(data.stress * 0.7).toFixed(1)} MPa`,
                ],
                answer: 0,
                formula: 'σ = P / A',
                explanation: `Normal stress is equal to axial force divided by cross-sectional area. Area = πd²/4. The correct stress is calculated using P = ${data.load} kN and d = ${data.diameter} mm.`,
                type: 'Numerical',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `A simply supported beam of span ${data.span} m carries a uniformly distributed load of ${data.load} kN/m. What is the maximum bending moment at midspan?`,
                options: [
                    `${data.moment.toFixed(1)} kN·m`,
                    `${(data.moment * 0.8).toFixed(1)} kN·m`,
                    `${(data.moment * 1.2).toFixed(1)} kN·m`,
                    `${(data.moment * 0.5).toFixed(1)} kN·m`,
                ],
                answer: 0,
                formula: 'M = wL² / 8',
                explanation: `Maximum bending moment for a simply supported beam with UDL is wL²/8. Using w = ${data.load} kN/m and L = ${data.span} m gives the correct value.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `For a solid circular shaft of diameter ${data.diameter} mm transmitting ${data.torque} kN·m, what is the maximum shear stress?`,
                options: [
                    `${data.shearStress.toFixed(1)} MPa`,
                    `${(data.shearStress * 0.75).toFixed(1)} MPa`,
                    `${(data.shearStress * 1.25).toFixed(1)} MPa`,
                    `${(data.shearStress * 0.6).toFixed(1)} MPa`,
                ],
                answer: 0,
                formula: 'τ = 16T / πd³',
                explanation: `For a solid circular shaft, τ = 16T / πd³. Using T = ${data.torque} kN·m and d = ${data.diameter} mm gives the correct shear stress.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Assertion (A): In tension, the elongation of a steel rod is proportional to the applied force. Reason (R): The relationship is defined by Hooke's law within elastic limit.`,
                options: [
                    'Both A and R are true and R is the correct explanation of A',
                    'Both A and R are true but R is not the correct explanation of A',
                    'A is true and R is false',
                    'A is false and R is true',
                ],
                answer: 0,
                formula: 'δ = PL / AE',
                explanation: `Within the elastic limit, elongation is proportional to force and follows Hooke's law. Therefore both statements are true and R explains A.`,
                type: 'AssertionReason',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Reinforced Concrete (RCC)',
        count: 13,
        topics: [
            'Flexural Design',
            'Shear Design',
            'Bond and Anchorage',
            'Slab Design',
            'Column Design',
            'Footing Design',
        ],
        templates: [
            (data) => ({
                question: `A singly reinforced concrete beam has a design moment of ${data.moment} kN·m. If the effective width is ${data.width} mm and effective depth is ${data.depth} mm, which of the following is closest to the required tensile reinforcement area?`,
                options: [
                    `${data.area.toFixed(0)} mm²`,
                    `${(data.area * 0.85).toFixed(0)} mm²`,
                    `${(data.area * 1.15).toFixed(0)} mm²`,
                    `${(data.area * 0.6).toFixed(0)} mm²`,
                ],
                answer: 0,
                formula: 'Ast = M / (0.87 f_y z)',
                explanation: `Tensile reinforcement area in a singly reinforced beam is estimated using Ast = M / (0.87 f_y z), where z≈0.9d. Using the given dimensions and a typical f_y = ${data.fy} MPa yields the correct area.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `For a one-way slab spanning ${data.span} m and carrying a design load of ${data.load} kN/m², which design concept is primarily used?`,
                options: ['Two-way slab action', 'One-way slab action', 'Cantilever action', 'Arch action'],
                answer: 1,
                formula: '',
                explanation: `A slab with one dimension significantly larger than the other and supported on two opposite sides behaves as a one-way slab. The given span and load indicate one-way slab action.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `If the permissible shear stress in concrete is ${data.vc} MPa and design shear force is ${data.vu} kN, what is the minimum required shear reinforcement spacing for a beam width of ${data.width} mm?`,
                options: [
                    `${data.spacing.toFixed(0)} mm`,
                    `${(data.spacing * 1.2).toFixed(0)} mm`,
                    `${(data.spacing * 0.8).toFixed(0)} mm`,
                    `${(data.spacing * 1.5).toFixed(0)} mm`,
                ],
                answer: 0,
                formula: 'Av/S = (Vu - Vc) / (0.87 fy d)',
                explanation: `Shear reinforcement spacing is based on Av/S = (Vu - Vc) / (0.87 f_y d). Using the given values and assuming a single stirrup leg gives the correct spacing.`,
                type: 'Numerical',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Fluid Mechanics & Hydraulic Machinery',
        count: 11,
        topics: [
            'Bernoulli Equation',
            'Flow in Pipes',
            'Open Channel Flow',
            'Pump Performance',
            'Hydraulic Turbines',
        ],
        templates: [
            (data) => ({
                question: `Water flows through a pipe with velocity ${data.velocity} m/s and pressure ${data.pressure} kPa. Which principle relates pressure, velocity, and elevation head?`,
                options: ['Navier-Stokes equation', 'Bernoulli equation', 'Darcy-Weisbach equation', 'Continuity equation'],
                answer: 1,
                formula: '',
                explanation: `Bernoulli equation relates pressure head, velocity head, and elevation head for steady incompressible flow. The described relation is the Bernoulli principle.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `A pump delivers ${data.flow} L/s against a head of ${data.head} m with efficiency ${data.efficiency}%. What is the input power in kW?`,
                options: [
                    `${data.power.toFixed(2)} kW`,
                    `${(data.power * 0.85).toFixed(2)} kW`,
                    `${(data.power * 1.15).toFixed(2)} kW`,
                    `${(data.power * 0.6).toFixed(2)} kW`,
                ],
                answer: 0,
                formula: 'P = ρgQH / η',
                explanation: `Pump power is P = ρ g Q H / η. Using ρ = 1000 kg/m³, g = 9.81 m/s², and converting flow to m³/s gives the correct input power.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `A pump is operating at Reynolds number ${data.reynolds}. Which flow regime is most likely present in the pipe?`,
                options: ['Laminar', 'Transitional', 'Turbulent', 'Critical'],
                answer: 2,
                explanation: `For Reynolds numbers above 4000, flow is generally turbulent. A value of ${data.reynolds} indicates turbulent flow.`,
                type: 'Conceptual',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Steel Structures',
        count: 12,
        topics: [
            'Beams',
            'Trusses',
            'Connections',
            'Columns',
            'Welded Joints',
            'Buckling',
        ],
        templates: [
            (data) => ({
                question: `A steel column with effective length ${data.length} m and radius of gyration ${data.r} mm has a slenderness ratio close to ${data.slenderness}. Which failure mode is most critical?`,
                options: ['Yielding', 'Buckling', 'Shear failure', 'Bearing failure'],
                answer: 1,
                formula: '',
                explanation: `Columns with high slenderness ratio are governed by buckling. Since the slenderness ratio is large, buckling is the critical failure mode.`,
                type: 'Conceptual',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `For a simply supported steel beam carrying a point load of ${data.load} kN at midspan, what is the bending moment at midspan for a span of ${data.span} m?`,
                options: [
                    `${data.moment.toFixed(1)} kN·m`,
                    `${(data.moment * 0.75).toFixed(1)} kN·m`,
                    `${(data.moment * 1.25).toFixed(1)} kN·m`,
                    `${(data.moment * 0.5).toFixed(1)} kN·m`,
                ],
                answer: 0,
                formula: 'M = P L / 4',
                explanation: `For a point load at midspan on a simply supported beam, the maximum bending moment is P L / 4. Using the given load and span yields the correct value.`,
                type: 'Numerical',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `A bolted shear connection is chosen over a welded connection mainly because it provides:`,
                options: ['Higher fatigue strength', 'Easier inspection and assembly', 'Lower weight', 'Better electrical conductivity'],
                answer: 1,
                explanation: `Bolted connections are preferred when field inspection and assembly ease are priorities.`,
                type: 'Practical',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `Match the following steel section properties with their descriptions: 1. I-section 2. Channel section 3. Angle section.`,
                options: ['1-A, 2-B, 3-C', '1-B, 2-A, 3-C', '1-A, 2-C, 3-B', '1-C, 2-A, 3-B'],
                answer: 0,
                explanation: `I-sections are used for bending, channels for secondary beams, and angles for bracing and light framing.`,
                type: 'MatchTheFollowing',
                difficulty: 'Medium',
            }),
        ],
    },
    {
        subject: 'Foundation Engineering',
        count: 10,
        topics: [
            'Bearing Capacity',
            'Settlement',
            'Pile Foundations',
            'Soil Investigation',
            'Footings',
        ],
        templates: [
            (data) => ({
                question: `A square footing of side ${data.side} m carries a column load of ${data.load} kN. If allowable bearing capacity is ${data.capacity} kN/m², what is the required factor of safety for bearing capacity?`,
                options: [
                    `${data.fos.toFixed(1)}`,
                    `${(data.fos * 0.8).toFixed(1)}`,
                    `${(data.fos * 1.2).toFixed(1)}`,
                    `${(data.fos * 1.5).toFixed(1)}`,
                ],
                answer: 0,
                formula: 'FS = q_allowable A / P',
                explanation: `Factor of safety is the ratio of allowable bearing resistance to applied load. Using the footing area and load gives the correct FS.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `During soil investigation, Standard Penetration Test (SPT) blow count of ${data.n} indicates which of the following soil conditions?`,
                options: ['Soft', 'Medium dense', 'Dense', 'Very dense'],
                answer: 1,
                formula: '',
                explanation: `An SPT N-value around ${data.n} usually corresponds to medium dense soil. The answer best matches the standard soil interpretation.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `If the degree of saturation is ${data.saturation.toFixed(0)}% and void ratio is ${data.e.toFixed(2)}, which soil property is directly affected?`,
                options: ['Permeability', 'Dry density', 'Shear strength', 'Volume change'],
                answer: 3,
                formula: '',
                explanation: `Degree of saturation and void ratio directly affect volume change during consolidation and swelling.`,
                type: 'Conceptual',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Soil Mechanics',
        count: 9,
        topics: [
            'Soil Classification',
            'Permeability',
            'Consolidation',
            'Shear Strength',
            'Earth Pressure',
            'Compaction',
        ],
        templates: [
            (data) => ({
                question: `A soil sample has void ratio ${data.e} and specific gravity ${data.gs}. What is the approximate degree of saturation when moisture content is ${data.w}%?`,
                options: [
                    `${data.saturation.toFixed(0)}%`,
                    `${(data.saturation * 0.85).toFixed(0)}%`,
                    `${(data.saturation * 1.15).toFixed(0)}%`,
                    `${(data.saturation * 0.6).toFixed(0)}%`,
                ],
                answer: 0,
                formula: 'S = w Gs / e',
                explanation: `Degree of saturation is S = w Gs / e. Substituting w = ${data.w}%, Gs = ${data.gs}, and e = ${data.e} gives the correct saturation.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Rankine active earth pressure is used to estimate lateral pressure for which type of backfill condition?`,
                options: ['Welded steel backfill', 'Cohesionless backfill with free drainage', 'Cohesive backfill with positive pore pressure', 'Lined backfill under surcharge'],
                answer: 1,
                formula: '',
                explanation: `Rankine active earth pressure is applied for cohesionless backfill with free drainage, making option 2 correct.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
        ],
    },
];

const electricalBlueprint = [
    {
        subject: 'Power Systems',
        count: 14,
        topics: [
            'Power Generation',
            'Transmission Lines',
            'Line Models',
            'Underground Cables',
            'String Insulators',
            'Corona',
            'Distribution Systems',
            'Per Unit System',
            'Bus Admittance Matrix',
            'Bus Impedance Matrix',
            'Load Flow',
            'Voltage Control',
            'Power Factor Correction',
            'Economic Operation',
            'Symmetrical Components',
            'Fault Analysis',
            'Over Current Protection',
            'Differential Protection',
            'Distance Protection',
            'Alternator Protection',
            'Transformer Protection',
            'Transmission Line Protection',
            'Neutral Earthing',
            'Solid State Relays',
            'Digital Protection',
            'Circuit Breakers',
            'System Stability',
            'Swing Curves',
            'Equal Area Criterion',
        ],
        templates: [
            (data) => ({
                question: `A transmission line delivers ${data.powerMW} MW at ${data.voltage} kV with power factor ${data.pf}. What is the approximate current in the line?`,
                options: [
                    `${data.current.toFixed(1)} A`,
                    `${(data.current * 0.9).toFixed(1)} A`,
                    `${(data.current * 1.1).toFixed(1)} A`,
                    `${(data.current * 0.6).toFixed(1)} A`,
                ],
                answer: 0,
                formula: 'I = P / (√3 V pf)',
                explanation: `Line current for a three-phase system is I = P / (√3 V pf). Using P = ${data.powerMW} MW, V = ${data.voltage} kV and pf = ${data.pf} gives the correct current.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Which parameter is improved by switching in capacitor banks on a distribution feeder?`,
                options: ['Voltage regulation', 'Short circuit current', 'Power quality', 'System frequency'],
                answer: 0,
                formula: '',
                explanation: `Capacitor banks provide reactive power compensation, which improves voltage regulation on the feeder.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `A single line-to-ground fault is an example of which fault type?`,
                options: ['Balanced fault', 'Unbalanced fault', 'Open circuit fault', 'Series fault'],
                answer: 1,
                formula: '',
                explanation: `Single line-to-ground faults are unbalanced faults because only one phase is affected.`,
                type: 'Conceptual',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Electrical Machines',
        count: 13,
        topics: [
            'Single Phase Transformer',
            'Equivalent Circuit',
            'Phasor Diagram',
            'Transformer Tests',
            'Regulation',
            'Efficiency',
            'Three Phase Transformers',
            'Connections',
            'Parallel Operation',
            'Auto Transformer',
            'DC Machines',
            'Windings',
            'Generator Characteristics',
            'Motor Characteristics',
            'Armature Reaction',
            'Commutation',
            'Starting',
            'Speed Control',
            'Three Phase Induction Motors',
            'Performance Characteristics',
            'Starting Methods',
            'Speed Control',
            'Single Phase Induction Motors',
            'Synchronous Machines',
            'Regulation',
            'Parallel Operation',
            'Motor Starting',
            'Applications',
        ],
        templates: [
            (data) => ({
                question: `A transformer has rating ${data.rating} kVA and voltage ratio ${data.primary}:${data.secondary}. What is the approximate secondary current at full load?`,
                options: [
                    `${data.transformerCurrent.toFixed(1)} A`,
                    `${(data.transformerCurrent * 0.8).toFixed(1)} A`,
                    `${(data.transformerCurrent * 1.2).toFixed(1)} A`,
                    `${(data.transformerCurrent * 0.5).toFixed(1)} A`,
                ],
                answer: 0,
                formula: 'I2 = S / (√3 V2)',
                explanation: `Secondary current at full load is I2 = S / (√3 V2) for a three-phase transformer. Using the rating and secondary voltage gives the correct value.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Which characteristic improves when a synchronous motor operates at leading power factor?`,
                options: ['Torque angle', 'Voltage regulation', 'Power factor', 'Starting current'],
                answer: 1,
                formula: '',
                explanation: `Leading power factor operation with synchronous motors helps to boost voltage regulation by supplying reactive power to the grid.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `Induction motor slip is defined as the ratio of:`,
                options: ['Synchronous speed to rotor speed', 'Rotor speed to synchronous speed', 'Speed difference to synchronous speed', 'Rotor speed to supply frequency'],
                answer: 2,
                formula: '',
                explanation: `Slip is defined as (Ns - Nr) / Ns, the difference between synchronous speed and rotor speed divided by synchronous speed.`,
                type: 'Conceptual',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Electric Circuits',
        count: 11,
        topics: [
            'Network Graph',
            'KCL',
            'KVL',
            'Node Analysis',
            'Mesh Analysis',
            'Star-Delta Transformation',
            'Electromagnetic Induction',
            'Mutual Induction',
            'AC Fundamentals',
            'Harmonics',
            'DC Transients',
            'AC Transients',
            'Sinusoidal Steady State',
            'Resonance',
            'Ideal Sources',
            'Thevenin Theorem',
            'Norton Theorem',
            'Superposition',
            'Maximum Power Transfer',
            'Two-Port Networks',
            'Three Phase Circuits',
            'Power Measurement',
        ],
        templates: [
            (data) => ({
                question: `In an RLC series circuit with R = ${data.r} Ω, L = ${data.l} mH and C = ${data.c} μF, the resonant frequency is approximately which of the following?`,
                options: [
                    `${data.freq.toFixed(1)} Hz`,
                    `${(data.freq * 0.8).toFixed(1)} Hz`,
                    `${(data.freq * 1.2).toFixed(1)} Hz`,
                    `${(data.freq * 1.5).toFixed(1)} Hz`,
                ],
                answer: 0,
                formula: 'f = 1 / (2π√(LC))',
                explanation: `Resonant frequency in a series RLC circuit is 1 / (2π√(LC)). The given inductance and capacitance values yield the correct frequency.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Which of the following is always true for nodes in an electrical network?`,
                options: ['Voltage is zero', 'Sum of currents leaving the node is zero', 'Power is conserved', 'All impedances are equal'],
                answer: 1,
                explanation: `Kirchhoff's Current Law states that the algebraic sum of currents entering and leaving a node is zero.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
        ],
    },
    {
        subject: 'Control Systems',
        count: 8,
        topics: [
            'Principles of Feedback',
            'Transfer Function',
            'Block Diagrams',
            'Steady State Error',
            'Routh Criterion',
            'Nyquist Criterion',
            'Bode Plot',
            'Root Locus',
            'Lag Compensation',
            'Lead Compensation',
            'Lead-Lag Compensation',
        ],
        templates: [
            (data) => ({
                question: `A unity feedback system has an open loop transfer function with a gain of ${data.gain}. Increasing the gain will primarily affect which of the following?`,
                options: ['Steady state error', 'System type', 'Pole locations', 'Sampling frequency'],
                answer: 0,
                explanation: `In a unity feedback system, increasing the loop gain reduces steady state error for a given input.`,
                type: 'Conceptual',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Which plot is used to assess gain margin and phase margin of a control system?`,
                options: ['Nyquist plot', 'Bode plot', 'Root locus', 'State-space plot'],
                answer: 1,
                explanation: `Bode plots display gain and phase versus frequency and are used to determine gain and phase margins.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `A system with low phase margin is most likely to exhibit:`,
                options: ['Good stability', 'High overshoot', 'Low gain', 'Large time constant'],
                answer: 1,
                explanation: `Low phase margin generally leads to unstable behavior or high overshoot in time response.`,
                type: 'Formula',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Power Electronics & Drives',
        count: 7,
        topics: [
            'Power Diodes',
            'Power Transistors',
            'SCR',
            'TRIAC',
            'GTO',
            'MOSFET',
            'IGBT',
            'Static Characteristics',
            'Triggering Circuits',
            'Phase Controlled Rectifiers',
            'Fully Controlled Bridge Converter',
            'Half Controlled Converter',
            'Choppers',
            'Inverters',
            'Adjustable Speed DC Drives',
            'Adjustable Speed AC Drives',
        ],
        templates: [
            (data) => ({
                question: `A single-phase full-wave bridge rectifier with an AC input of ${data.input} V RMS produces a DC output approximated by which of the following?`,
                options: [
                    `${data.output.toFixed(1)} V`,
                    `${(data.output * 0.9).toFixed(1)} V`,
                    `${(data.output * 1.1).toFixed(1)} V`,
                    `${(data.output * 0.7).toFixed(1)} V`,
                ],
                answer: 0,
                formula: 'Vdc = 2Vm / π',
                explanation: `For a full-wave bridge rectifier, the average output voltage is 2Vm / π. For Vrms = ${data.input}, Vm = Vrms√2.`,
                type: 'Numerical',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Which device is normally used as the main switching element in a controlled rectifier?`,
                options: ['Diode', 'SCR', 'MOSFET', 'Triac'],
                answer: 1,
                explanation: `SCRs are used as controlled switches in rectifier circuits because their conduction can be controlled by gate signal.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `In a controlled rectifier, delaying the firing angle increases:`,
                options: ['Average output voltage', 'Average output current', 'Harmonic distortion', 'Transformer flux'],
                answer: 2,
                explanation: `Delaying the firing angle reduces the conduction interval and increases harmonic distortion in the output waveform.`,
                type: 'Conceptual',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Measurements',
        count: 6,
        topics: [
            'Bridges',
            'Potentiometers',
            'PMMC Instruments',
            'Moving Iron Instruments',
            'Dynamometer Instruments',
            'Induction Type Instruments',
            'Voltage Measurement',
            'Current Measurement',
            'Power Measurement',
            'Energy Measurement',
            'Power Factor Measurement',
            'Digital Voltmeters',
            'Digital Multimeters',
            'Phase Measurement',
            'Time Measurement',
            'Frequency Measurement',
            'Q Meter',
            'Oscilloscope',
        ],
        templates: [
            (data) => ({
                question: `A PMMC instrument is preferred for DC measurements because it has which property?`,
                options: ['Low torque', 'High accuracy', 'Frequency sensitivity', 'Large hysteresis'],
                answer: 1,
                explanation: `PMMC instruments offer high accuracy and linearity for DC measurements, making them the preferred choice.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `Which instrument is typically used to measure power in a three-phase system?`,
                options: ['Voltmeter', 'Ammeter', 'Wattmeter', 'Ohmmeter'],
                answer: 2,
                explanation: `A wattmeter measures real power in electrical systems. In a three-phase system, appropriate connections are used for power measurement.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `A moving iron instrument is usually preferred for AC measurement because it is:`,
                options: ['Highly accurate', 'Insensitive to frequency', 'Sensitive to polarity', 'Linear for all currents'],
                answer: 1,
                explanation: `Moving iron instruments are used for AC because they are largely insensitive to frequency and polarity changes.`,
                type: 'Conceptual',
                difficulty: 'Medium',
            }),
        ],
    },
    {
        subject: 'Analog Electronics',
        count: 4,
        topics: [
            'Diodes',
            'BJT',
            'FET',
            'Amplifiers',
            'Biasing',
            'Equivalent Circuits',
            'Frequency Response',
            'Oscillators',
            'Feedback Amplifiers',
        ],
        templates: [
            (data) => ({
                question: `In a common emitter amplifier, what is the role of the bypass capacitor connected across the emitter resistor?`,
                options: ['Stabilize DC bias', 'Increase gain at AC', 'Reduce input impedance', 'Provide voltage regulation'],
                answer: 1,
                explanation: `The emitter bypass capacitor provides an AC short circuit, increasing the amplifier gain at AC while leaving DC bias unchanged.`,
                type: 'Conceptual',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `A diode is forward biased when its anode is:`,
                options: ['More positive than the cathode', 'More negative than the cathode', 'At equal potential', 'Connected to AC supply'],
                answer: 0,
                explanation: `A diode conducts in forward bias when the anode is at higher potential than the cathode.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `Which parameter is most affected by increasing the bias current in a BJT amplifier?`,
                options: ['Voltage gain', 'Power consumption', 'Input impedance', 'Signal frequency'],
                answer: 1,
                explanation: `Increasing bias current raises the power consumption of a BJT amplifier.`,
                type: 'Practical',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Digital Electronics',
        count: 3,
        topics: [
            'Combinational Logic',
            'Sequential Logic',
            'Multiplexers',
            'Schmitt Trigger',
            'ADC',
            'DAC',
            '8-bit Microprocessor',
            'Architecture',
            'Programming',
            'Interfacing',
        ],
        templates: [
            (data) => ({
                question: `Which logic gate produces a true output only when all inputs are true?`,
                options: ['OR', 'AND', 'XOR', 'NAND'],
                answer: 1,
                explanation: `An AND gate outputs true only if all inputs are true.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `Match the following digital components: 1. Flip-flop 2. Multiplexer 3. Decoder.`,
                options: ['1-B, 2-A, 3-C', '1-A, 2-B, 3-C', '1-B, 2-C, 3-A', '1-C, 2-A, 3-B'],
                answer: 0,
                explanation: `Flip-flops are sequential storage elements, multiplexers select one of many inputs, decoders convert coded inputs to unique outputs.`,
                type: 'MatchTheFollowing',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `A binary to decimal converter is an example of which type of digital logic circuit?`,
                options: ['Combinational', 'Sequential', 'Memory', 'Analog'],
                answer: 0,
                explanation: `Binary-to-decimal conversion is achieved through combinational logic without storing state.`,
                type: 'Conceptual',
                difficulty: 'Hard',
            }),
        ],
    },
    {
        subject: 'Utilization of Electrical Energy',
        count: 4,
        topics: [
            'Resistance Heating',
            'Induction Heating',
            'Dielectric Heating',
            'Spot Welding',
            'Seam Welding',
            'Butt Welding',
            'Electric Traction',
            'Speed-Time Curves',
            'Tractive Effort',
        ],
        templates: [
            (data) => ({
                question: `Which form of heating is typically used for industrial metal melting due to its ability to heat rapidly and uniformly?`,
                options: ['Resistance heating', 'Induction heating', 'Dielectric heating', 'Gas heating'],
                answer: 1,
                explanation: `Induction heating is commonly used in industrial metal melting because it heats rapidly and uniformly without direct contact.`,
                type: 'Conceptual',
                difficulty: 'Medium',
            }),
            (data) => ({
                question: `Regenerative braking in electric traction systems is useful because it:`,
                options: ['Increases track wear', 'Saves energy', 'Reduces speed only', 'Improves traction'],
                answer: 1,
                explanation: `Regenerative braking recovers energy back to the supply or storage system, reducing energy consumption.`,
                type: 'Conceptual',
                difficulty: 'Easy',
            }),
            (data) => ({
                question: `Which welding process is commonly used for high-quality joints in power equipment fabrication?`,
                options: ['Arc welding', 'Gas welding', 'Resistance welding', 'Electron beam welding'],
                answer: 0,
                explanation: `Arc welding is a standard process for high-quality joints in power equipment fabrication due to its control and penetration.`,
                type: 'Practical',
                difficulty: 'Hard',
            }),
        ],
    },
];

const nonCoreBlueprint = [
    {
        section: 'Quantitative Aptitude',
        count: 8,
        templates: [
            (data) => ({
                subject: 'Quantitative Aptitude',
                topic: 'Percentage',
                question: `If the cost price of an item is ₹${data.cp} and selling price is ₹${data.sp}, what is the profit percentage?`,
                options: [
                    `${data.profitPercent.toFixed(0)}%`,
                    `${(data.profitPercent + 5).toFixed(0)}%`,
                    `${(data.profitPercent - 5).toFixed(0)}%`,
                    `${(data.profitPercent * 2).toFixed(0)}%`,
                ],
                answer: 0,
                explanation: `Profit percentage = (SP - CP) / CP × 100. Using CP = ₹${data.cp} and SP = ₹${data.sp} gives the correct value.`,
                difficulty: 'Easy',
                type: 'Numerical',
            }),
            (data) => ({
                subject: 'Quantitative Aptitude',
                topic: 'Ratio',
                question: `In the ratio ${data.a}:${data.b}, if the total is ${data.sum}, what is the larger part?`,
                options: [
                    `${data.larger}`,
                    `${data.smaller}`,
                    `${data.sum / 2}`,
                    `${data.sum - 1}`,
                ],
                answer: 0,
                explanation: `The larger part in ratio a:b is (a / (a+b)) × total. Using the given values gives the larger quantity.`,
                difficulty: 'Easy',
                type: 'Conceptual',
            }),
        ],
    },
    {
        section: 'General Awareness',
        count: 7,
        templates: [
            (data) => ({
                subject: 'General Awareness',
                topic: 'Environment',
                question: `Which of the following gases is a primary contributor to global warming?`,
                options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
                answer: 2,
                explanation: `Carbon dioxide is a primary greenhouse gas responsible for global warming.`,
                difficulty: 'Easy',
                type: 'Conceptual',
            }),
            (data) => ({
                subject: 'General Awareness',
                topic: 'Current Affairs',
                question: `An upcoming power sector policy typically focuses on which of the following?`,
                options: ['Renewable integration', 'Space exploration', 'Marine conservation', 'Sports awards'],
                answer: 0,
                explanation: `Power sector policies usually focus on renewable energy integration and grid modernization.`,
                difficulty: 'Medium',
                type: 'Conceptual',
            }),
        ],
    },
    {
        section: 'Reasoning & General Intelligence',
        count: 5,
        templates: [
            (data) => ({
                subject: 'Reasoning & General Intelligence',
                topic: 'Number Series',
                question: `Find the next number in the series: ${data.series.join(', ')}.`,
                options: [
                    `${data.next}`,
                    `${data.next + 2}`,
                    `${data.next - 1}`,
                    `${data.next + 5}`,
                ],
                answer: 0,
                explanation: `The series increases by ${data.difference}, so the next number is ${data.next}.`,
                difficulty: 'Easy',
                type: 'Pattern',
            }),
            (data) => ({
                subject: 'Reasoning & General Intelligence',
                topic: 'Coding-Decoding',
                question: `If in a code A=1, B=2, ..., then the code for POWER is which of the following?`,
                options: ['80-15-23-5-18', '16-15-23-5-18', '16-15-23-5-18', '18-5-23-15-16'],
                answer: 1,
                explanation: `Mapping each letter to its position in the alphabet gives 16-15-23-5-18 for POWER.`,
                difficulty: 'Easy',
                type: 'Conceptual',
            }),
            (data) => ({
                subject: 'Reasoning & General Intelligence',
                topic: 'Seating Arrangement',
                question: `If A sits to the left of B and C sits to the right of B, who sits in the centre?`,
                options: ['A', 'B', 'C', 'Cannot say'],
                answer: 1,
                explanation: `B must be in the centre when A is to the left and C is to the right of B.`,
                difficulty: 'Medium',
                type: 'Logical',
            }),
        ],
    },
    {
        section: 'English Language & Comprehension',
        count: 5,
        templates: [
            (data) => ({
                subject: 'English Language & Comprehension',
                topic: 'Grammar',
                question: `Choose the correct sentence.`,
                options: [
                    'He have completed the task.',
                    'He has completed the task.',
                    'He had complete the task.',
                    'He having completed the task.',
                ],
                answer: 1,
                explanation: `The correct present perfect form is "He has completed the task.".`,
                difficulty: 'Easy',
                type: 'Grammar',
            }),
            (data) => ({
                subject: 'English Language & Comprehension',
                topic: 'Vocabulary',
                question: `Choose the synonym of 'robust'.`,
                options: ['Weak', 'Sturdy', 'Broken', 'Volatile'],
                answer: 1,
                explanation: `'Robust' means strong or sturdy.`,
                difficulty: 'Medium',
                type: 'Vocabulary',
            }),
        ],
    },
    {
        section: 'Computer Knowledge',
        count: 5,
        templates: [
            (data) => ({
                subject: 'Computer Knowledge',
                topic: 'Software',
                question: `Which application is primarily used for spreadsheet calculations?`,
                options: ['MS Word', 'MS Excel', 'MS PowerPoint', 'MS Paint'],
                answer: 1,
                explanation: `MS Excel is used for spreadsheet calculations.`,
                difficulty: 'Easy',
                type: 'Conceptual',
            }),
            (data) => ({
                subject: 'Computer Knowledge',
                topic: 'Networking',
                question: `Which device connects multiple networks and forwards packets between them?`,
                options: ['Switch', 'Router', 'Hub', 'Modem'],
                answer: 1,
                explanation: `A router connects multiple networks and forwards packets based on IP addresses.`,
                difficulty: 'Medium',
                type: 'Conceptual',
            }),
            (data) => ({
                subject: 'Computer Knowledge',
                topic: 'Hardware',
                question: `Which component is responsible for executing instructions in a computer?`,
                options: ['Hard disk', 'CPU', 'RAM', 'Monitor'],
                answer: 1,
                explanation: `The CPU executes instructions and performs the main processing tasks in a computer.`,
                difficulty: 'Hard',
                type: 'Conceptual',
            }),
        ],
    },
];

const createDeterministicValue = (base, offset, multiplier = 1) => base + ((offset * 31 + multiplier * 17) % 11);

const generateValues = (testIndex, questionIndex) => {
    const offset = testIndex * 13 + questionIndex * 7;
    const diameter = 20 + (offset % 15) * 2;
    const load = 50 + (offset % 9) * 6;
    const span = 3 + (offset % 4) * 1;
    const torque = 40 + (offset % 6) * 5;
    const width = 300 + (offset % 4) * 50;
    const depth = 450 + (offset % 4) * 25;
    const fy = 415;
    const vc = 0.25 + (offset % 3) * 0.05;
    const vu = 100 + (offset % 9) * 7;
    const side = 1 + (offset % 3) * 0.5;
    const capacity = 150 + (offset % 5) * 10;
    const e = 0.45 + (offset % 4) * 0.05;
    const gs = 2.65;
    const w = 12 + (offset % 7) * 2;
    const flow = 20 + (offset % 8) * 3;
    const head = 10 + (offset % 5) * 2;
    const efficiency = 70 + (offset % 3) * 5;
    const rating = 500;
    const secondary = 0.415;
    const powerMW = 60;
    const voltage = 132;
    const pf = 0.95;
    const r = 10;
    const l = 20;
    const c = 2;

    const area = (Math.PI * diameter * diameter) / 4;
    const stress = (load * 1000) / area;
    const moment = (load * span * span) / 8;
    const shearStress = (16 * torque * 1e6) / (Math.PI * Math.pow(diameter, 3));
    const ast = (moment * 1e6) / (0.87 * fy * (0.9 * depth));
    const spacing = Math.max(80, ((0.87 * fy * depth * 100) / Math.max(10, vu * 1000 - vc * width * depth)));
    const fos = (capacity * side * side) / load;
    const saturation = Math.min(100, ((w / 100) * gs * 100) / e);
    const pumpPower = (9.81 * (flow / 1000) * head) / (efficiency / 100);
    const current = (powerMW * 1e6) / (Math.sqrt(3) * voltage * 1e3 * pf);
    const transformerCurrent = (rating * 1000) / (Math.sqrt(3) * secondary * 1000);
    const freq = 1 / (2 * Math.PI * Math.sqrt((l / 1000) * (c / 1e6)));
    const output = (2 * (230 * Math.sqrt(2))) / Math.PI;

    return {
        diameter,
        load,
        span,
        moment,
        torque,
        stress,
        shearStress,
        velocity: 2 + (offset % 5) * 1,
        pressure: 100 + (offset % 6) * 10,
        flow,
        head,
        efficiency,
        reynolds: 4500 + (offset % 5) * 200,
        width,
        depth,
        fy,
        vc,
        vu,
        area: ast,
        spacing,
        side,
        capacity,
        fos,
        n: 5 + (offset % 10),
        e,
        gs,
        w,
        saturation,
        a: 3 + (offset % 2),
        b: 2 + ((offset + 1) % 2),
        larger: 72,
        smaller: 48,
        sum: 120,
        series: [2, 5, 10, 17],
        difference: 7,
        next: 26,
        cp: 250,
        sp: 300,
        profitPercent: 20,
        input: 230,
        primary: 11,
        secondary,
        rating,
        pf,
        power: pumpPower,
        powerMW,
        voltage,
        current,
        freq,
        output,
        gain: 10 + (offset % 5) * 5,
        r,
        l,
        c,
        slenderness: 60 + (offset % 6) * 10,
        length: 3 + (offset % 4),
        transformerCurrent,
    };
};

const generateSubjectQuestions = (testId, subjectConfig, testIndex, startQuestionNumber) => {
    const questions = [];
    for (let i = 0; i < subjectConfig.count; i += 1) {
        const topic = subjectConfig.topics[i % subjectConfig.topics.length];
        const template = subjectConfig.templates[i % subjectConfig.templates.length];
        const values = generateValues(testIndex, startQuestionNumber + i);
        const data = {
            ...values,
            topic,
            testId,
            subject: subjectConfig.subject,
        };
        const result = template(data);
        const id = startQuestionNumber + i + 1;
        const questionText = `${result.question}`;
        const options = result.options;
        const answer = result.answer;
        questions.push({
            id,
            subject: subjectConfig.subject,
            topic,
            question: questionText,
            image: '',
            options,
            answer,
            difficulty: result.difficulty || 'Medium',
            questionType: result.type || 'Conceptual',
            formula: result.formula || '',
            explanation: result.explanation || '',
            source: 'MASTER_RULES / APTRANSCO syllabus',
        });
    }
    return questions;
};

const generateNonCoreQuestions = (testId, testIndex) => {
    const questions = [];
    let currentId = 71;
    const createNonCoreQuestion = (sectionConfig, index) => {
        const values = generateValues(testIndex, currentId);
        const template = sectionConfig.templates[index % sectionConfig.templates.length];
        const result = template(values);
        const options = result.options || [];
        const answer = result.answer ?? 0;
        const item = {
            id: currentId,
            subject: result.subject,
            topic: result.topic,
            question: result.question,
            image: '',
            options,
            answer,
            difficulty: result.difficulty || 'Easy',
            questionType: result.type || 'Conceptual',
            formula: result.formula || '',
            explanation: result.explanation || '',
            source: 'Uploaded non-core sources',
        };
        currentId += 1;
        return item;
    };

    nonCoreBlueprint.forEach((section) => {
        for (let q = 0; q < section.count; q += 1) {
            questions.push(createNonCoreQuestion(section, q));
        }
    });
    return questions;
};

const generateCivilBank = (testIndex) => {
    const questions = [];
    let currentId = 0;
    civilBlueprint.forEach((subjectConfig) => {
        questions.push(...generateSubjectQuestions(`civil${String(testIndex + 1).padStart(2, '0')}`, subjectConfig, testIndex, currentId));
        currentId += subjectConfig.count;
    });
    questions.push(...generateNonCoreQuestions(`civil${String(testIndex + 1).padStart(2, '0')}`, testIndex));
    return questions;
};

const generateElectricalBank = (testIndex) => {
    const questions = [];
    let currentId = 0;
    electricalBlueprint.forEach((subjectConfig) => {
        questions.push(...generateSubjectQuestions(`electrical${String(testIndex + 1).padStart(2, '0')}`, subjectConfig, testIndex, currentId));
        currentId += subjectConfig.count;
    });
    questions.push(...generateNonCoreQuestions(`electrical${String(testIndex + 1).padStart(2, '0')}`, testIndex));
    return questions;
};

const questionBanks = {};
for (let i = 0; i < TEST_COUNT; i += 1) {
    const civilKey = `civil${String(i + 1).padStart(2, '0')}`;
    const electricalKey = `electrical${String(i + 1).padStart(2, '0')}`;
    questionBanks[civilKey] = generateCivilBank(i);
    questionBanks[electricalKey] = generateElectricalBank(i);
}

export { questionBanks };
