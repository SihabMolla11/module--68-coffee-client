import Swal from "sweetalert2";

const AddCoffee = () => {
  const handelAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className=" bg-orange-50 p-24 rounded-md">
      <div className=" text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Add coffee Form</h1>
        <progress className="progress w-56 w-full"></progress>
      </div>
      <form onSubmit={handelAddCoffee}>
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
  );
};

export default AddCoffee;
