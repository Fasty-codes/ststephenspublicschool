// facilityImages.js
import extraCurricular from './assets/images/extra.jpg';
import schoolBand from './assets/images/slide14.png';
import playground from './assets/images/slide23.jpg';
import annualCelebration from './assets/images/slide13.png';
import indoorGames from './assets/images/slide24.jpg';
import labFacilities from './assets/images/slide41.jpg';
import schoolExhibition from './assets/images/slide29.jpg';
import yogaActivities from './assets/images/slide28.png';
import sportsDay from './assets/images/slide47.png';
import ninjaKickboxing from './assets/images/slide26.jpg';
import schoolTour from './assets/images/slide8.jpg';
import library from './assets/images/slide40.jpg';
import artCraft from './assets/images/slide44.png';

const facilityImages = [
  // First carousel images
  {
    src: extraCurricular,
    alt: "Students participating in extra curricular activities",
    title: "Extra Curricular Activities"
  },
  {
    src: schoolBand,
    alt: "School band performing",
    title: "School Band"
  },
  {
    src: playground,
    alt: "Spacious school playground",
    title: "Spacious Playground"
  },
  {
    src: annualCelebration,
    alt: "Annual day celebration",
    title: "Annual Celebration"
  },
  {
    src: indoorGames,
    alt: "Students playing indoor games",
    title: "Indoor Games"
  },
  {
    src: labFacilities,
    alt: "Well equipped school lab",
    title: "Lab Facilities"
  },

  // Second carousel images
  {
    src: schoolExhibition,
    alt: "School science exhibition",
    title: "School Exhibition"
  },
  {
    src: yogaActivities,
    alt: "Students practicing yoga",
    title: "Yoga Activities"
  },
  {
    src: sportsDay,
    alt: "Annual sports day event",
    title: "Sports Day"
  },
  {
    src: ninjaKickboxing,
    alt: "Ninja and kickboxing training",
    title: "Ninja & Kickboxing"
  },
  {
    src: schoolTour,
    alt: "Students on educational tour",
    title: "School Tour"
  },
  {
    src: library,
    alt: "School library with books",
    title: "Library"
  },
  {
    src: artCraft,
    alt: "Student art and craft work",
    title: "Art & Craft"
  }
];

export const firstCarouselImages = facilityImages.slice(0, 6);
export const secondCarouselImages = facilityImages.slice(6);

export default facilityImages;