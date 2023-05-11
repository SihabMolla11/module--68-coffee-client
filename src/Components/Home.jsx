import { useEffect, useState } from "react";
import { FaRegEye, FaPen, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [coffees, setCoffess] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffess(data));
  }, []);

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffess(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl"> Avialave coffee: {coffees.length}</h1>

      <div className="grid grid-cols-2 gap-10 mt-5">
        {coffees.map((coffee) => (
          <div key={coffee._id}>
            <div className="card card-side items-center bg-[#F5F4F1] shadow-xl">
              <figure>
                <img src={coffee.photo} alt="Movie" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <strong>Name: </strong>
                      {coffee.name}
                    </p>
                    <p>
                      <strong>Supplier: </strong>
                      {coffee.supplier}
                    </p>
                    <p>
                      <strong>Details: </strong>
                      {coffee.details}
                    </p>
                  </div>
                  <div className="text-white">
                    <p className="my-5 bg-[#D2B48C] p-3 rounded-md">
                      <FaRegEye />
                    </p>
                    <p className="my-5 bg-[#3C393B] p-3 rounded-md">
                      <Link to={`/updatecoffee/${coffee._id}`}>
                        <FaPen />
                      </Link>
                    </p>
                    <p
                      onClick={() => handelDelete(coffee._id)}
                      className="my-5 bg-[#EA4744] p-3 rounded-md"
                    >
                      <FaRegTrashAlt />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
