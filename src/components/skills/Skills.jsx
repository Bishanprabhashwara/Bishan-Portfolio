// src/Skills.jsx
import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Programming Languages',
    subcategory: 'Languages',
    items: [
      { src: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white', alt: 'Java' },
      { src: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white', alt: 'C' },
      { src: 'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white', alt: 'C#' },
      { src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54', alt: 'Python' },
      { src: 'https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white', alt: 'R' },
    ],
  },
  {
    category: 'Web Technology',
    subcategory: 'Languages',
    items: [
      { src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', alt: 'HTML5' },
      { src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', alt: 'CSS3' },
      { src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', alt: 'JavaScript' },
      { src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white', alt: 'TypeScript' },
      { src: 'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white', alt: 'PHP' },
    ],
  },
  {
    category: 'Framework & Libraries',
    items: [
      { src: 'https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot', alt: 'Spring Boot' },
      { src: 'https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white', alt: '.NET' },
      { src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', alt: 'React' },
      { src: 'https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white', alt: 'Angular' },
      { src: 'https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white', alt: 'Bootstrap' },
      { src: 'https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white', alt: 'Apache' },
      { src: 'https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white', alt: 'WordPress' },
    ],
  },
  {
    category: 'Database Technology',
    items: [
      { src: 'https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white', alt: 'MySQL' },
      { src: 'https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white', alt: 'Microsoft SQL Server' },
      { src: 'https://img.shields.io/badge/Microsoft%20Access-A4373A?style=for-the-badge&logo=microsoft-access&logoColor=white', alt: 'Microsoft Access' },
      { src: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white', alt: 'MongoDB' },
    ],
  },
  {
    category: 'Documentation & Others',
    items: [
      { src: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white', alt: 'Postman' },
      { src: 'https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white', alt: 'GitHub Pages' },
      { src: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', alt: 'Figma' },
      { src: 'https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white', alt: 'Jira' },
      { src: 'https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white', alt: 'Canva' },
    ],
  },
  {
    category: 'Softwares',
    subcategory: 'Using for planning and development',
    items: [
      { src: 'https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white', alt: 'Visual Studio Code' },
      { src: 'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=for-the-badge&logo=visual-studio&logoColor=white', alt: 'Visual Studio' },
      { src: 'https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white', alt: 'IntelliJ IDEA' },
      { src: 'https://img.shields.io/badge/Android%20Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white', alt: 'Android Studio' },
      { src: 'https://img.shields.io/badge/Geany-6DC68C?style=for-the-badge&logo=geany&logoColor=white', alt: 'Geany' },
      { src: 'https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=power-bi&logoColor=white', alt: 'Power BI' },
      { src: 'https://img.shields.io/badge/Minitab-0082C8?style=for-the-badge&logo=minitab&logoColor=white', alt: 'Minitab' },
    ],
  },
  {
    category: 'Machine Learning',
    subcategory: 'Frameworks',
    items: [
      { src: 'https://img.shields.io/badge/tensorflow-%23ED8B00.svg?style=for-the-badge&logo=tensorflow&logoColor=white', alt: 'TensorFlow' },
      { src: 'https://img.shields.io/badge/scikit-learn-%23ED8B00.svg?style=for-the-badge&logo=scikit-learn&logoColor=white', alt: 'Scikit-learn' },
      { src: 'https://img.shields.io/badge/ONNX-%23ED8B00.svg?style=for-the-badge&logo=ONNX&logoColor=white', alt: 'ONNX' },
      { src: 'https://img.shields.io/badge/keras-%23ED8B00.svg?style=for-the-badge&logo=keras&logoColor=white', alt: 'Keras' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <div className="skills-section">
        <h1 className="section-title-01">My Skills</h1>
        <h2 className="section-title-02 stroke-text-white">My Skills</h2>
        </div>
        <div className="content flex-center">
          <div className="timeline">
            {skillsData.map((skillCategory, index) => (
              <div className={`skill-container ${index % 2 === 0 ? 'left-container' : 'right-container'}`} key={index}>
                <div className="bullet"></div>
                <div className="text-box">
                  <h3>{skillCategory.category}</h3>
                  {skillCategory.subcategory && <h5>{skillCategory.subcategory}</h5>}
                  <ul className="items">
                    {skillCategory.items.map((item, idx) => (
                      <li key={idx}>
                        <img src={item.src} alt={item.alt} />
                      </li>
                    ))}
                  </ul>
                  <span className={`${index % 2 === 0 ? 'left-container-arrow left-container-arrow-mobile' : 'right-container-arrow'}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
