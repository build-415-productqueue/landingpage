/*
 * teamMembers is an array of containing the details of team members as team member objects.
 */

let teamMembers = [
  {
    name: 'Rahul Desai',
    role: 'Team Lead',
    image: 'https://getcadence.co/static/media/Rahul.bfb692ef.jpg',
    socialMediaLinks: [
      'https://github.com/rd825',
      'https://www.linkedin.com/in/rdesai01/',
      'https://twitter.com/RDesai01'
    ],
    description:
      "Rahul is a full-stack web developer with a background in corporate strategy. In his past life as consultant, he helped numerous household brands dream up and launch new products, services, and experiences. He's looking to combine his business and technical skills to go from advising makers to being a maker himself. For fun, he reads every book he can get his hands on and cheers on the Georgetown Hoyas (no matter how disappointing they are)."
  },
  {
    name: 'Kevin Smith',
    role: 'Back End Engineer',
    image: 'https://github.com/keveightysev.png',
    socialMediaLinks: [
      'https://github.com/keveightysev',
      'https://www.linkedin.com/in/keveightysev/',
      'https://twitter.com/keveightysev'
    ],
    description:
      'Kevin is a web developer based in Wisconsin. He previously worked in customer service, leading teams in providing solutions for every customer interaction. He loves styling and building in React. A cheesehead for life .'
  },
  {
    name: 'Matt Rothstein',
    role: 'Backend Engineer',
    image:
      'https://avatars2.githubusercontent.com/u/14257188?s=400&u=29b2fa775d8752bcab2472136bc4d9fcbd0c3c8a&v=4',
    socialMediaLinks: [
      'https://github.com/mattr21',
      'https://www.linkedin.com/in/matt-rothstein/',
      ''
    ],
    description:
      'Matt lives in Washington state and currently attends Lambda for full stack web. Previously, he did marketing, data analytics, and managed an off-site web dev team. He enjoys backend the most and looks forward to expanding and using what he’s learned in a new career.'
  },
  {
    name: 'Austin Powell',
    role: 'Front-End Architect',
    image: './assets/Austin_ProfilePic.PNG',
    socialMediaLinks: [
      'https://github.com/Blackmemo',
      'https://www.linkedin.com/in/austin-powell-617b92180',
      ''
    ],
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
  },
  {
    name: 'Gayathri Ramakrishnan',
    role: 'Front End Developer',
    image: './assets/G3_ProfilePic.jpeg',
    socialMediaLinks: [
      'https://github.com/G3Ram',
      'https://www.linkedin.com/in/gayathri-ramakrishnan-b4470631/',
      'mailto:gayathri.t.ramakrishnan@gmail.com'
    ],
    description:
      'Gayathri is a student at Lambda pursuing Full-stack development. She has a strong background in web applications realting to manufacturing and logistics. She recently moved from being a project manager of cyber security implementations to a full-time student at Lambda. She enjoys coding and is looking for a strong coding experience in her future roles.'
  }
]

// Looping through the teamMembers array and invoking the "buildTeamMembers()" which created the
// HTML DOM fragment for each team member
teamMembers.forEach(teamMember => buildTeamMembers(teamMember))

/*
 * buildTeamMembers() function builds the HTML for each team member in the teamMembers array.
 * It takes in the information of a teamMember and creates the necessary tags and populates the data
 * accordingly.
 *
 * @teamMember - One item from the array list teamMembers. Contains information about the team members
 *
 */
function buildTeamMembers(teamMember) {
  let parentElement = document.querySelector('.css-sec-card')
  let siblingElement = document.querySelector('.css-cbg-select-all')
  let teamMemberSection = createSectionTag('css-gray-sec-cards')
  let divContentArea = createDivTag('css-gray-content-area')
  let divContentImgArea = createDivTag('css-gray-content-img-area')
  let divContentImg = createDivTag('css-gray-content-img')
  let bckimg = 'background-image: url(' + teamMember.image + ')'
  divContentImg.setAttribute('style', bckimg)
  let nameDisplay = createH4Tag('css-sec-card-h4', teamMember.name)
  let titleDisplay = createPTag('css-sec-card-p-black', teamMember.role)
  let socialLinks = buildSocialLinks(teamMember)
  let divTextArea = createDivTag('css-gray-text-area')
  let textContent = createPTag('css-sec-card-text-p', teamMember.description)

  divContentImgArea.appendChild(divContentImg)
  divContentArea.appendChild(divContentImgArea)
  divContentArea.appendChild(nameDisplay)
  divContentArea.appendChild(titleDisplay)
  divContentArea.appendChild(socialLinks)
  divTextArea.appendChild(textContent)
  teamMemberSection.appendChild(divContentArea)
  teamMemberSection.appendChild(divTextArea)
  parentElement.insertBefore(teamMemberSection, siblingElement)
}

/*
 * This function creates the 'section' tag
 *
 * @param - className - Name of the CSS class for section.
 */
function createSectionTag(className) {
  let section = document.createElement('section')
  section.className = className
  return section
}

/*
 * This function creates the 'div' tag
 *
 * @param - className - Name of the CSS class for div.
 */
function createDivTag(className) {
  let divTag = document.createElement('div')
  divTag.className = className
  return divTag
}

/*
 * This function creates the 'h4' tag
 *
 * @param - className - Name of the CSS class for h4.
 * @param - name - Takes in a string - name of the team member
 */
function createH4Tag(className, name) {
  let h4Tag = document.createElement('h4')
  h4Tag.className = className
  h4Tag.innerHTML = name
  return h4Tag
}

/*
 * This function creates the 'p' tag
 *
 * @param - className - Name of the CSS class for p.
 * @param - description - Takes in a string
 */
function createPTag(className, description) {
  let pTag = document.createElement('p')
  pTag.className = className
  pTag.innerHTML = description
  return pTag
}

/*
 * This function creates the 'ul' tag
 *
 * @param - className - Name of the CSS class for ul.
 */
function createUnorderedListTag(className) {
  let ulTag = document.createElement('ul')
  ulTag.className = className
  return ulTag
}

/*
 * This function creates the 'li' tag
 */
function createListTag() {
  let listTag = document.createElement('li')
  return listTag
}

/*
 * This function creates the 'a' tag
 *
 * @param - className - Name of the CSS class for a.
 * @param - reference - Where the link has to point to
 */
function createATag(className, reference) {
  let aTag = document.createElement('a')
  aTag.className = className
  aTag.href = reference
  aTag.target = '_blank'
  aTag.rel = 'noopener noreferrer'
  return aTag
}

/*
 * This function creates the 'image' tag
 *
 * @param - className - Name of the CSS class for image.
 * @param - imageSource - The source of the image
 */
function createImageTag(className, imageSource) {
  let imgTag = document.createElement('img')
  imgTag.className = className
  imgTag.src = imageSource
  return imgTag
}

/*
 * This function builds the social links
 *
 * @param - teamMember - Takes the teamMember object and extracts the socialMedia
 * links array to form the links.
 */
function buildSocialLinks(teamMember) {
  let ulTag = createUnorderedListTag('css-gray-content-ul')
  let imgSrc = [
    './assets/lambdaGH.svg',
    './assets/lambdaIn.svg',
    './assets/lambdaTwitter.svg'
  ]
  for (let i = 0; i < teamMember.socialMediaLinks.length; i++) {
    if (teamMember.socialMediaLinks[i] != '') {
      let liTag = createListTag()
      let aTag = createATag(
        'css-social-media-link',
        teamMember.socialMediaLinks[i]
      )
      let imgTag = createImageTag('css-social-media-img', imgSrc[i])
      aTag.appendChild(imgTag)
      liTag.appendChild(aTag)
      ulTag.appendChild(liTag)
    }
  }
  return ulTag
}
