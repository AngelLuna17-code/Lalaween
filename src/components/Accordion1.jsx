import React from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item text-white">
      <div className="accordion-title" onClick={toggleAccordion}>
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Accordion
        title="Section 1"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
      />
      <Accordion
        title="Section 2"
        content="Dolor sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
      />
      <Accordion
        title="Section 3"
        content="Sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
      />
    </div>
  );
};

export default App;
