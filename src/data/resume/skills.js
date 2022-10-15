// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'React.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + SCSS/CSS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Express.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Node.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Playwright',
    competency: 4,
    category: ['Web Testing'],
  },
  {
    title: 'Allure2',
    competency: 3,
    category: ['Web Testing'],
  },
  {
    title: 'Android Studio',
    competency: 4,
    category: ['Mobile App Development'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Mobile App Development', 'Languages'],
  },
  {
    title: 'SQLite3/MySQL',
    competency: 3,
    category: ['Web Development', 'Mobile App Development'],
  },
  {
    title: 'Firebase',
    competency: 2,
    category: ['Mobile App Development'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Data Analysis', 'Languages'],
  },
  {
    title: 'D3.js',
    competency: 4,
    category: ['Data Analysis', 'Visualization'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Analysis'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Analysis', 'Visualization'],
  },
  {
    title: 'Seaborn',
    competency: 3,
    category: ['Data Analysis', 'Visualization'],
  },
  {
    title: 'NumPy',
    competency: 2,
    category: ['Data Analysis'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Analysis'],
  },
  {
    title: 'Unity',
    competency: 4,
    category: ['Graphics', 'Game Development'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Game Development', 'Languages'],
  },
  {
    title: 'MonoGame',
    competency: 2,
    category: ['Game Development'],
  },
  {
    title: 'Unreal',
    competency: 2,
    category: ['Game Development'],
  },
  {
    title: 'OpenGL',
    competency: 3,
    category: ['Graphics'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Graphics', 'Languages'],
  },
  {
    title: 'WebGL',
    competency: 2,
    category: ['Graphics'],
  },
  {
    title: 'Blender',
    competency: 2,
    category: ['Graphics'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Assembly',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Shell',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'F#',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Git/Github',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#009900',
  '#515dd4',
  '#ff9900',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d11aff',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
