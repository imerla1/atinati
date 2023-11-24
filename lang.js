let langState = localStorage.getItem("langState")
  ? localStorage.getItem("langState")
  : "GE";

const langKa = {
  "home-nav": "მთავარი",
  "services-nav": "სერვისები",
  "about-nav": "ჩვენს შესახებ",
  "projects-nav": "პროექტები",
  "testimonials-nav": "მიმოხილვები",
  "contact-nav": "კონტაქტი",
  "atinati-intro-text":
    "თქვენი სანდო პარტნიორი დასუფთავებისა და გამწვანების სერვისებში",
  "atinati-intro-sub-text":
    "ათინათში ჩვენ გვესმის სუფთა და მწვანე გარემოს მნიშვნელობა.იქნება ეს სამშენებლო მოედანი, საცხოვრებელი ფართი თუ კომერციული ფართი, ჩვენი თავდადებული გუნდი აქ არის, რათა მოგაწოდოთ უმაღლესი დონის დასუფთავებისა და გამწვანების სერვისები თქვენს საჭიროებებზე მორგებული.",
  "learn-more-btn": "გაიგეთ მეტი",
  "we-offer-head": "ჩვენ გთავაზობთ",
  "offer-cleaning-services": "დასუფთავების სერვისები",
  "removal-const-waste-title": "სამშენებლო ნარჩენის გატანა",
  "removal-const-waste-text":
    "სამშენებლო პროექტის დასრულების შემდეგ ჩვენ მოგვანდეტ დასუფთავება. ჩვენი გუნდი ეფექტურად გაწმენდს ტერიტორიას სამშენებლო ნარჩენებისგან, რის შემდგეცას თქვენი ტერიტორია მზად იქნება შემდეგი ეტაპისთვის",
  "cleaning-yards-title": "ეზოების დასუფთავება",
  "cleaning-yards-text":
    "კეთილმოწყობილი ეზო აძლიერებს თქვენი ქონების სილამაზეს. ჩვენ გთავაზობთ ეზოს დასუფთავების ყოვლისმომცველ მომსახურებას, ფოთლების მოცილებიდან გაზონის გაკრეჭვამდე, რაც უზრუნველყოფს თქვენს გარე სივრცეს გამოიყურებოდეს საუკეთესოდ",
  "cleaning-cottages-title": "აგარაკების დასუფთავება",
  "cleaning-cottages-text":
    "ჩვენი აგარაკების დასუფთავების სერვისები შექმნილია იმისთვის, რომ თქვენი დასვენება უმწიკვლო იყოს, რაც საშუალებას მოგცემთ დაისვენოთ და დატკბეთ სიმშვიდით.",
  "cleaning-entrances-title": "სადარბაზოების დასუფთავება",
  "cleaning-entrances-text":
    "პირველი შთაბეჭდილება მნიშვნელოვანია. დარწმუნდით, რომ თქვენი შესასვლელები დადებით გავლენას ახდენენ ჩვენი სადარბაზოების დასუფთავების სერვისებით. ჩვენ ყურადღებას ვაქცევთ თქვენი სტუმრებისა და კლიენტებისთვის სასიამოვნო გარემოს შექმნას.",
  "cleaning-after-repair-title": "რემონტის შემდგომ დასუფთავება",
  "cleaning-after-repair-text":
    "რემონტის შემდგომი ქაოსი? დასუფთავება ჩვენ მოგვანდეთ. ჩვენი გუნდი სპეციალიზირებულია რემონტის შემდგომ დასუფთავებაში.",
  "cleaning-drains-title": "სანიაღვრეების გაწმენდვა",
  "cleaning-drains-text":
    "არ მისცეთ საშუალება დაბლოკილმა კანალიზაციამ დაარღვიოს თქვენი რუტინა. ჩვენი სანიაღვრე დასუფთავების სერვისები დაიცავს თქვენს სანტექნიკას საუკეთესო მდგომარეობაში, თავიდან აიცილებს ბლოკირებას და უზრუნველყოფს წყლის გლუვ ნაკადს.",
  "greening-yards-title": "ეზოების გამწვანება",
  "greening-yards-text":
    "გადააქციეთ თქვენი გარე სივრცე აყვავებულ და ძლიერ ოაზისად. ჩვენი გამწვანების სერვისები მოიცავს გამწვანებას, დარგვას და მოვლას, მდგრადი და ვიზუალურად მიმზიდველი გარემოს შექმნას.",
  "why-choose-us-text": "რატომ ჩვენ?",
  "trait-name-pro-text":
    "პროფესიონალიზმი ჩვენი გაწვრთნილი და გამოცდილი პერსონალი ეძღვნება პროფესიონალურ დასუფთავების მომსახურებას დეტალების ყურადღების ცენტრში.",
  "trait-name-customized-text":
    "მორგებული გადაწყვეტილებები ჩვენ გვესმის, რომ ყველა სივრცე უნიკალურია. ჩვენი სერვისები შეიძლება მორგებული იყოს თქვენი კონკრეტული მოთხოვნების შესაბამისად.",
  "trait-name-reliability-text":
    "საიმედოობა: იმედი გქონდეთ, რომ იქ ვიქნებით, როცა დაგჭირდებათ. ჩვენ ვამაყობთ პუნქტუალურობითა და საიმედოობით.",
  "trait-name-qa-text":
    "Ხარისხის გარანტია: ჩვენ ვიბრძვით სრულყოფილებისკენ ყველა სამუშაოში, რომელსაც ვასრულებთ. თქვენი კმაყოფილება ჩვენი პრიორიტეტია.",
  "our-projects-text": "ჩვენი პროექტები",
  "view-more-btn-2": "გაიგეთ მეტი",
  "satisfied-clients-text": "კმაყოფილი კლიენტები",
  "finished-projects-text": "შესრულებული პროექტები",
  "team-members": "Გუნდის წევრები",
  "testimonial-main-text":
    "ჩვენი მომხმარებლები ჩვენია ყველაზე დიდი გულშემატკივრები არიან",
  "testimonial-1-content":
    "ძაან მაგარი კომპანიაა ვაუუუუ, ისე მაგრად მომემსახურენ",
  "testimonial-1-author": "ირაკლი ჩხეიძე",
  "testimonial-1-author-pos": "Director, Dj market",
  "contact-section-text": "დაგვიკავშირდით",
};

const langEn = {
  "home-nav": "Home",
  "services-nav": "Services",
  "about-nav": "About",
  "projects-nav": "Projects",
  "testimonials-nav": "Testimonial",
  "contact-nav": "Contact",
  "atinati-intro-text":
    "Your Trusted Partner in Cleaning and Greening Services",
  "atinati-intro-sub-text":
    "At Atinati, we understand the importance of a clean and green environment. Whether it's a construction site, a residential property, or a commercial space, our dedicated team is here to provide top-notch cleaning and greening services tailored to your needs.",
  "learn-more-btn": "Learn More",
  "we-offer-head": "We’re offering",
  "offer-cleaning-services": "Cleaning Services",
  "removal-const-waste-title": "Removal of Construction Waste",
  "removal-const-waste-text":
    "After the completion of your construction project, let us handle the cleanup. Our team will efficiently remove construction debris, leaving your site ready for the next phase.",
  "cleaning-yards-title": "Cleaning Yards",
  "cleaning-yards-text":
    "A well-maintained yard enhances the beauty of your property. We offer comprehensive yard cleaning services, from leaf removal to lawn mowing, ensuring your outdoor space looks its best.",
  "cleaning-cottages-title": "Cleaning of Cottages",
  "cleaning-cottages-text":
    "Escape to your country retreat without worrying about the cleaning. Our cottage cleaning services are designed to keep your getaway spotless, allowing you to relax and enjoy the tranquility.",
  "cleaning-entrances-title": "Cleaning the Entrances",
  "cleaning-entrances-text":
    "First impressions matter. Make sure your entrances leave a positive impact with our entrance cleaning services. We focus on creating a welcoming environment for your guests and clients.",
  "cleaning-after-repair-title": "Cleaning After Repair",
  "cleaning-after-repair-text":
    "Post-repair chaos? Leave the cleanup to us. Our team specializes in post-repair cleaning, ensuring your space is spotless and ready for use.",
  "cleaning-drains-title": "Cleaning of Drains",
  "cleaning-drains-text":
    "Don't let clogged drains disrupt your routine. Our drain cleaning services will keep your plumbing in top condition, preventing blockages and ensuring smooth water flow.",
  "greening-yards-title": "Greening of Yards",
  "greening-yards-text":
    "Transform your outdoor space into a lush and vibrant oasis. Our greening services include landscaping, planting, and maintenance, creating a sustainable and visually appealing environment.",
  "why-choose-us-text": "Why Choose Us?",

  "trait-name-pro-text":
    "Professionalism: Our trained and experienced staff are dedicated to delivering professional cleaning services with attention to detail.",
  "trait-name-customized-text":
    "Customized Solutions: We understand that every space is unique. Our services can be tailored to meet your specific requirements.",
  "trait-name-reliability-text":
    "Reliability: Count on us to be there when you need us. We pride ourselves on punctuality and reliability.",
  "trait-name-qa-text":
    "Quality Assurance: We strive for excellence in every job we undertake. Your satisfaction is our priority.",
  "our-projects-text": "Let's See Our Latest Project  ",
  "view-more-btn-2": "View More",
  "satisfied-clients-text": "Satisfied clients",
  "finished-projects-text": "Finished Project",
  "team-members": "Team Members",
  "testimonial-main-text": "Our customers are our biggest fans",
  "testimonial-1-content":
    "Lorem ipsum dolor sit amet, consectetur pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium",
  "testimonial-1-author": "John Doe",
  "testimonial-1-author-pos": "Director, Dj market",
  "contact-section-text": "Let's get in touch",
};

function renderLanguage(lang) {
  if (lang === "GE") {
    for (const [key, value] of Object.entries(langKa)) {
      elem = document.getElementById(key);
      elem.innerText = value;
    }
  } else if (lang === "EN") {
    for (const [key, value] of Object.entries(langEn)) {
      elem = document.getElementById(key);

      elem.innerText = value;
    }
  }
}
renderLanguage(langState);
const languageSwitcher = document.getElementById("lang-switcher");
const langCheckbox = document.getElementById("lang-toggle");

if (langState === "GE") {
  langCheckbox.checked = false;
} else if (langState === "EN") {
  langCheckbox.checked = true;
}

languageSwitcher.addEventListener("change", () => {
  if (langCheckbox.checked) {
    renderLanguage("EN");
    localStorage.setItem("langState", "EN");
  } else if (!langCheckbox.checked) {
    renderLanguage("GE");
    localStorage.setItem("langState", "GE");
  }
});
