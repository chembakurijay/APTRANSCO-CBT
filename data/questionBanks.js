const civilQuestionTemplates = [
    {
        subject: 'Structural Engineering',
        topic: 'Beam Theory',
        question: 'What is the typical material used for reinforced concrete beams?',
        options: ['Steel', 'Concrete', 'Wood', 'Glass'],
        answer: 1,
    },
    {
        subject: 'Geotechnical Engineering',
        topic: 'Soil Classification',
        question: 'Which soil type is classified as coarse-grained?',
        options: ['Clay', 'Silt', 'Sand', 'Peat'],
        answer: 2,
    },
    {
        subject: 'Fluid Mechanics',
        topic: 'Flow Rate',
        question: 'If velocity of water in a pipe doubles and cross-sectional area is constant, how does flow rate change?',
        options: ['Halves', 'Doubles', 'Remains constant', 'Quadruples'],
        answer: 1,
    },
    {
        subject: 'Transportation Engineering',
        topic: 'Pavement Design',
        question: 'What is the primary purpose of the pavement subgrade?',
        options: ['Aesthetic finish', 'Load distribution', 'Traffic control', 'Solar reflection'],
        answer: 1,
    },
    {
        subject: 'Concrete Technology',
        topic: 'Curing',
        question: 'Why is curing essential for concrete strength development?',
        options: ['Improve color', 'Increase strength', 'Reduce weight', 'Decrease thermal expansion'],
        answer: 1,
    },
    {
        subject: 'Construction Management',
        topic: 'Safety',
        question: 'Which document is used to manage construction site hazards?',
        options: ['Material safety data sheet', 'Work plan', 'Safety audit', 'Traffic plan'],
        answer: 2,
    },
    {
        subject: 'Structural Analysis',
        topic: 'Trusses',
        question: 'A truss member carrying only axial force is known as what?',
        options: ['Beam', 'Column', 'Strut', 'Avoided member'],
        answer: 2,
    },
    {
        subject: 'Geotechnical Engineering',
        topic: 'Foundation',
        question: 'What type of foundation is used for very soft soil?',
        options: ['Shallow foundation', 'Raft foundation', 'Pile foundation', 'Strip foundation'],
        answer: 2,
    },
    {
        subject: 'Hydraulics',
        topic: 'Bernoulli',
        question: 'Bernoulli’s equation relates pressure, velocity, and what other term?',
        options: ['Temperature', 'Potential energy', 'Turbulence', 'Viscosity'],
        answer: 1,
    },
    {
        subject: 'Surveying',
        topic: 'Levels',
        question: 'What instrument is best suited for precise differential leveling?',
        options: ['Theodolite', 'Auto level', 'Laser level', 'GPS'],
        answer: 1,
    },
];

const electricalQuestionTemplates = [
    {
        subject: 'Circuit Theory',
        topic: 'Ohm’s Law',
        question: 'If current is 2 A and resistance is 5 Ω, what is the voltage?',
        options: ['2.5 V', '7 V', '10 V', '0.4 V'],
        answer: 2,
    },
    {
        subject: 'Power Systems',
        topic: 'Transformers',
        question: 'A transformer steps up voltage. What happens to current?',
        options: ['Increases', 'Decreases', 'Stays same', 'Becomes AC'],
        answer: 1,
    },
    {
        subject: 'Electrical Machines',
        topic: 'DC Motor',
        question: 'Which part of a DC motor rotates?',
        options: ['Stator', 'Rotor', 'Commutator', 'Brush'],
        answer: 1,
    },
    {
        subject: 'Power Electronics',
        topic: 'Rectifiers',
        question: 'A bridge rectifier converts AC into which type of current?',
        options: ['AC', 'DC', 'Pulsating DC', 'Three-phase AC'],
        answer: 2,
    },
    {
        subject: 'Control Systems',
        topic: 'Feedback',
        question: 'Negative feedback typically affects a system by:',
        options: ['Increasing gain', 'Reducing distortion', 'Destabilizing', 'Increasing noise'],
        answer: 1,
    },
    {
        subject: 'Power Systems',
        topic: 'Load Factor',
        question: 'Load factor is the ratio of average load to what?',
        options: ['Maximum load', 'Minimum load', 'Total demand', 'Installed capacity'],
        answer: 0,
    },
    {
        subject: 'Transmission Lines',
        topic: 'Characteristic Impedance',
        question: 'Characteristic impedance depends on which parameters?',
        options: ['Resistance only', 'Inductance and capacitance', 'Capacitance only', 'Voltage only'],
        answer: 1,
    },
    {
        subject: 'Signals',
        topic: 'Fourier Transform',
        question: 'Fourier transform converts a time signal into which domain?',
        options: ['Spatial', 'Frequency', 'Temperature', 'Pressure'],
        answer: 1,
    },
    {
        subject: 'Control Systems',
        topic: 'Stability',
        question: 'A stable linear system has poles located where in the s-plane?',
        options: ['Right half-plane', 'Left half-plane', 'On imaginary axis', 'At infinity'],
        answer: 1,
    },
    {
        subject: 'Electrical Machines',
        topic: 'Induction Motor',
        question: 'An induction motor operates with rotor speed that is:',
        options: ['Higher than synchronous speed', 'Lower than synchronous speed', 'Equal to synchronous speed', 'Zero at start'],
        answer: 1,
    },
];

const QUESTIONS_PER_TEST = 100;

const generateBank = (prefix, count, templates) => {
    const banks = {};

    for (let bankIndex = 1; bankIndex <= count; bankIndex += 1) {
        const key = `${prefix}${String(bankIndex).padStart(2, '0')}`;
        banks[key] = Array.from({ length: QUESTIONS_PER_TEST }, (_, questionIndex) => {
            const template = templates[questionIndex % templates.length];
            return {
                id: questionIndex + 1,
                subject: template.subject,
                topic: template.topic,
                question: `${template.question} (Test ${String(bankIndex).padStart(2, '0')}, Q${questionIndex + 1})`,
                image: '',
                options: template.options,
                answer: template.answer,
            };
        });
    }

    return banks;
};

export const questionBanks = {
    ...generateBank('civil', 20, civilQuestionTemplates),
    ...generateBank('electrical', 20, electricalQuestionTemplates),
};
