import toast from "react-hot-toast";
import { MdAddToPhotos } from "react-icons/md";
import useAuth from "../Hooks/useAuth";

const AddTouristSpotForm = () => {
  const { user } = useAuth();
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const touristSpotName = form.touristSpotName.value;
    const imageUrl = form.imageUrl.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const touristSpot = {
      countryName,
      location,
      touristSpotName,
      imageUrl,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      userEmail,
      userName,
    };
    fetch("http://localhost:5000/touristSpot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(touristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Tourist Spot Added Successfully");
        }
        form.reset();
      })
      .catch((err) => {
        toast.error("Failed to add tourist spot");
      });
  };
  return (
    <div
      className="border lg:max-w-7xl  rounded-xl p-10  shadow-xl m-4 mb-20
      mx-auto"
    >
      <form onSubmit={handleAdd} className="  ">
        <div className="md:flex font-semibold  mx-auto  rounded-xl p-5 gap-5 ">
          <div className="flex-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Country Name</span>
              </div>
              <select
                className="select select-bordered w-full"
                name="countryName"
                required
              >
                <option value="">Select a country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                placeholder="Location Name"
                className="input input-bordered w-full"
                name="location"
                required
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Tourist Spot Name</span>
              </div>
              <input
                type="text"
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full"
                name="touristSpotName"
                required
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full"
                name="imageUrl"
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Average Cost</span>
              </div>
              <input
                type="text"
                placeholder="Average Cost in USD"
                className="input input-bordered w-full"
                name="averageCost"
                required
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <textarea
                className="textarea textarea-md textarea-bordered"
                placeholder="Keep it short and sweet!"
                name="shortDescription"
              ></textarea>
            </label>
          </div>

          <div className="flex-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Seasonality</span>
              </div>
              <select
                name="seasonality"
                className="select select-bordered w-full"
                required
              >
                <option value="">Select a season</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Monsoon">Monsoon</option>
                <option value="Dry">Dry</option>
              </select>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Travel Time</span>
              </div>
              <input
                type="text"
                placeholder="Travel Time in Days"
                className="input input-bordered w-full"
                name="travelTime"
                required
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Total Visitors per Year</span>
              </div>
              <input
                type="text"
                placeholder="Total Visitors in Number"
                className="input input-bordered w-full"
                name="totalVisitorsPerYear"
                required
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">User Email</span>
              </div>
              <input
                type="email"
                placeholder="Your Email Address"
                defaultValue={`${user?.email}`}
                className="input input-bordered w-full"
                name="userEmail"
                required
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                type="text"
                placeholder="Your Username"
                className="input input-bordered w-full"
                name="userName"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-600 text-white"
          >
            <MdAddToPhotos />
            Add Tourist Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpotForm;
