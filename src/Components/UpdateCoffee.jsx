import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handelUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "coffee updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className=" bg-orange-50 p-24 rounded-md">
        <div className=" text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Update the: {name}</h1>
          <progress className="progress w-56 w-full"></progress>
        </div>
        <form onSubmit={handelUpdateCoffee}>
          {/* form name and quantity row start */}
          <div className="grid grid-cols-2 gap-8 mb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Inter your coffee name"
                  className="input w-[100%] input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input w-[100%] input-bordered"
                />
              </label>
            </div>
          </div>

          {/* form supplier taste row start */}
          <div className="grid grid-cols-2 gap-8 mb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier Name"
                  className="input w-[100%] input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input w-[100%] input-bordered"
                />
              </label>
            </div>
          </div>

          {/* form category and details row start */}
          <div className="grid grid-cols-2 gap-8 mb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input w-[100%] input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input w-[100%] input-bordered"
                />
              </label>
            </div>
          </div>

          {/* form photo url row start */}
          <div className="mb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo Url"
                  className="input w-[100%] input-bordered"
                />
              </label>
            </div>
          </div>

          <input
            className="btn bg-[#D2B48C] w-full hover:bg-[#f2B48C]"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
