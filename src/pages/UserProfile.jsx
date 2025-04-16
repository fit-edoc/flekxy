import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

const UserProfile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="p-4 h-[100vh] w-full bg-red-500">
    <div className='absolute bg-green-200 h-[calc(100vh-70px)] mt-[70px]  w-full'>
    <h1 className="text-2xl font-bold">Profile Page</h1>
      {user && (
        <div className="mt-4">
          <p className="text-lg bg-red-300">Username: {user.username}</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default UserProfile;
