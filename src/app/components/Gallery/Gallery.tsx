import Image from "next/image";
import Section from "../shared/Section";

const GALLERY_DATA = [
  "/assets/images/gallery1.jpeg",
  "/assets/images/gallery2.jpeg",
  "/assets/images/gallery3.webp",
  "/assets/images/gallery4.jpeg",
  "/assets/images/gallery5.webp",
];

const Gallery = () => {
  return (
    <Section>
      <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
        {GALLERY_DATA.map((item, index) => {
          return index === 0 ? (
            <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer ">
              <Image
                src={item}
                alt="Image"
                width={636}
                height={531}
                className="inset-0 object-cover rounded-md sm:rounded-xl w-full h-full"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
          ) : (
            <div className="relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  src={item}
                  alt="Image"
                  width={314}
                  height={262}
                  className="inset-0 object-cover rounded-md sm:rounded-xl w-full h-full"
                />
              </div>
              <div className="inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer top-0"></div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Gallery;
