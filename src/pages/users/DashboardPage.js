import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../utils/routes";
import {
  HiOutlineFolderOpen,
  HiOutlineUserCircle,
  HiOutlineLocationMarker,
  HiOutlineStar,
} from "react-icons/hi";
import { Card } from "../../components/cards";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.userLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(routes.login);
    }
  }, [user, navigate]);

  return (
    <main className="text-darkBlue">
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h6>
            Hi {user.profile.firstName} {user.profile.lastName},
          </h6>
          <h1 className="">Welcome to Local Shoppers</h1>
        </div>
      </section>
      <section className="container">
        {user && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-5">
            <Card className="hover:bg-indigo-100 transition duration-500">
              <Link className="flex space-x-2" to={routes.getOrders}>
                <div>
                  <HiOutlineFolderOpen className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Orders</h4>
                  <h6>Track or buy things again</h6>
                </div>
              </Link>
            </Card>
            <Card className="hover:bg-indigo-100 transition duration-500">
              <Link className="flex space-x-2" to={routes.profile}>
                <div>
                  <HiOutlineUserCircle className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Profile</h4>
                  <h6>Edit name, email or mobile number</h6>
                </div>
              </Link>
            </Card>
            <Card className="hover:bg-indigo-100 transition duration-500">
              <Link className="flex space-x-2" to={routes.getAddresses}>
                <div>
                  <HiOutlineLocationMarker className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Addresses</h4>
                  <h6>Edit addresses for orders</h6>
                </div>
              </Link>
            </Card>
            <Card className="hover:bg-indigo-100 transition duration-500">
              <Link className="flex space-x-2" to={routes.wishList}>
                <div>
                  <HiOutlineStar className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Wish List</h4>
                  <h6>Explore wishlist or buy things</h6>
                </div>
              </Link>
            </Card>
          </div>
        )}
      </section>
    </main>
  );
};

export default DashboardPage;
