import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu({ title, items }) {
  const [itemTitle, setItemTitle] = useState([]);

  const [isOpen, setIsOpen] = useState(true);

  const windowWidth = useWindowWidth();

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    setItemTitle(items);
  }, []);

  return (
    <section>
      <nav className="gap-y-2 md:gap-y-4">
        <h6
          onClick={toggleCollapse}
          className="text-lg text-primary-brand-color flex items-center justify-between mb-2"
        >
          {title}
          <button className="grid md:hidden w-6 h-6 grid place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
            <span
              className={`transition-all transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={14} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-2 md:gap-y-3">
              {itemTitle.map((item, key) => (
                <li key={key}>
                  <a href="#" className="text-sm">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}
