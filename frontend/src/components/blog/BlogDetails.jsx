import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import IsLoading from "../loading/IsLoading";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const res = await axios.get(`http://localhost:5000/blogs/${id}`);
        const data = res.data.blog;
        setBlog(data);
      })();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div>
        {isLoading && <IsLoading />}
        <h2 className="text-3xl font-bold mb-4">{blog?.title}</h2>
        <div className="flex items-center mb-4">
          <img
            src={blog?.author?.image}
            alt=""
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-lg font-medium">{blog?.author?.name}</p>
            <p className="text-gray-500">{blog?.date}</p>
          </div>
        </div>
        <img
          src={blog?.image}
          alt=""
          className="w-full md:h-[580px] rounded-md object-cover mb-4"
        />
        <div className="space-y-4">
          <p>{blog?.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab rem
            porro numquam laborum? Itaque beatae odio officia pariatur, labore,
            nesciunt ipsam explicabo officiis laborum recusandae corrupti,
            consequuntur sunt eius. Veniam temporibus natus suscipit ipsum, vero
            minus accusamus perferendis voluptatum aut esse dolores
            exercitationem! Repellat soluta architecto vero illo voluptatem
            animi hic aliquam dolores! Ad culpa sint dolorem in illum nulla
            harum voluptates expedita doloribus rem eaque, sed nihil accusantium
            autem explicabo pariatur, non tenetur, itaque velit esse dicta. Odio
            blanditiis deserunt culpa delectus dolorum voluptas repudiandae.
            Veritatis impedit libero iste minus, expedita in amet,
            necessitatibus delectus aut fugiat quidem nostrum fuga maxime
            accusantium natus quisquam molestias aperiam ipsa eius neque. Nemo
            dolorem eaque odit possimus unde distinctio? Nostrum fugit eaque,
            totam voluptate saepe officiis est autem voluptatum itaque nobis
            quidem perspiciatis! Doloribus blanditiis tempore voluptatem facilis
            reprehenderit omnis et dolorem dolorum, sint distinctio rem
            voluptates quasi dignissimos quisquam, recusandae ea, adipisci totam
            assumenda! Nihil eveniet iusto facilis maiores a? Velit mollitia
            eveniet nam quos, fuga error odit cumque voluptatem voluptas harum,
            totam numquam unde accusantium, animi rerum reiciendis atque eos
            veritatis ullam perspiciatis tempore est doloribus! Maiores dolores
            minus totam beatae, porro rem perferendis, iste numquam reiciendis
            recusandae deserunt unde?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
