import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-center text-center px-4 my-32 ">
      <h2 className="text-4xl font-bold mb-8">About Us</h2>
      <div className="grid lg:grid-cols-2 gap-4 items-center px-4 sm:px-32">
        <img className="w-full h-full p-2 m-auto" src={about} alt="/" />
        <p className="text-lg px-4 sm:px-0 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque repellendus, quis deleniti earum ipsa placeat a laborum numquam alias tenetur ad sint voluptatum illo dicta mollitia. Blanditiis consectetur sed ad. Odio quidem
          dicta deserunt corrupti similique possimus sequi libero aliquam, ducimus, maxime eum reprehenderit labore repellendus doloremque illo impedit laboriosam mollitia dolores. Ipsam blanditiis odit quo. Distinctio cum earum culpa.
          Fugit voluptates, sit quibusdam cupiditate deleniti ex voluptatem consectetur necessitatibus doloribus omnis officia non rerum dolores aspernatur voluptas! Reprehenderit quo ratione sint numquam doloremque vel ex quam odio quas
          vitae? Eaque, quod excepturi architecto eveniet corporis eligendi in unde sequi molestias ratione dignissimos a quis, culpa iusto, saepe repellendus ea illum? Mollitia dicta accusamus cumque corporis aperiam. Ratione, vitae ad?
          Voluptatem dicta facere, enim adipisci, qui recusandae dolor odio error eos ut architecto quibusdam. Temporibus dolorum, dolores voluptatem inventore, nihil cumque obcaecati iste vitae fuga perspiciatis veritatis vero aliquam
          harum.
        </p>
      </div>
    </div>
  );
};

export default About;
