import React, { useState, useEffect } from 'react';
import { User } from '../../constants/user';
import UserRow from './UserRow';
import Pagination from '../Pagination/Pagination';
import Cookies from 'js-cookie';

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => {
  const totalExports = 30;
  const itemsPerPage = 10;

  const [role, setRole] = useState('Agent');
  const [enableOtp, setEnableOtp] = useState(false);
  const [forcePasswordReset, setForcePasswordReset] = useState(false);
  const [sendWelcomeEmail, setSendWelcomeEmail] = useState(false);
  const [sendSmsNotification, setSendSmsNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    return () => {
      setIsModalOpen(false);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accessToken = Cookies.get('accessToken');

    try {
      const response = await fetch('https://avetiumbackupservice.avetiumconsult.com/api/auth/admin/create-agent/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone_number: phoneNumber,
          username,
          password,
          role: role.toLowerCase(),
          enable_otp: enableOtp,
          force_password_reset: forcePasswordReset,
          send_welcome_email: sendWelcomeEmail,
          send_sms_notification: sendSmsNotification,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error creating user:', errorData);
        alert('Failed to create user.');
        return;
      }

      alert('User created successfully!');
      closeModal();
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error while creating user.');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 overflow-x-auto relative">
      <div className="flex justify-between items-center mb-4 min-w-full">
        <h2 className="font-semibold text-[20px] sm:text-[24px] leading-[20px]">User Management</h2>
        <button
          className="bg-[#6F0C15] text-white text-sm sm:text-base px-3 py-2 rounded-md whitespace-nowrap cursor-pointer"
          onClick={openModal}
        >
          + Add New User
        </button>
      </div>

      <div className="bg-[#EFE4E5] overflow-x-auto">
        <table className="min-w-[800px] w-full table-auto text-left border-collapse">
          <thead className="font-medium border-b border-gray-400 text-[#1C1C1C66] text-[13px] sm:text-[14.97px] leading-[22.45px]">
            <tr>
              <th className="p-2"><input type="checkbox" className="accent-[#6F0C15] w-4 h-4" /></th>
              <th className="p-2  text-gray-400">Name</th>
              <th className="p-2  text-gray-400">Email</th>
              <th className="p-2  text-gray-400">Role</th>
              <th className="p-2  text-gray-400">Last Login</th>
              <th className="p-2  text-gray-400">Status</th>
              <th className="p-2  text-gray-400">Edit</th>
              <th className="p-2  text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs sm:text-sm mt-4">
        <Pagination totalItems={totalExports} itemsPerPage={itemsPerPage} />
      </div>

      {isModalOpen && (
        <div className="absolute mt-4 w-full max-w-md right-0 top-10">
          <div className="bg-[#EFE4E5] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-[#6F0C15] font-semibold">User Management</h3>
              <button className="text-xl text-[#6F0C15]" onClick={closeModal}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block text-sm text-[#6F0C15]">First Name</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block text-sm text-[#6F0C15]">Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="phoneNumber" className="block text-sm text-[#6F0C15]">Phone Number</label>
                    <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm text-[#6F0C15]">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="username" className="block text-sm text-[#6F0C15]">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="password" className="block text-sm text-[#6F0C15]">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                </div>

                <div className="flex gap-4 mb-4">
                  <button type="button" className={`px-12 py-2 rounded-2xl ${role === 'Agent' ? 'bg-[#6F0C15] text-white' : 'bg-gray-400'}`} onClick={() => setRole('Agent')}>Agent</button>
                  <button type="button" className={`px-8 py-2 rounded-2xl ${role === 'Supervisor' ? 'bg-[#6F0C15] text-white' : 'bg-gray-400'}`} onClick={() => setRole('Supervisor')}>Supervisor</button>
                </div>

                {[{
                  label: 'Enable OTP',
                  checked: enableOtp,
                  onChange: () => setEnableOtp(!enableOtp),
                }, {
                  label: 'Force Password Reset on First Login',
                  checked: forcePasswordReset,
                  onChange: () => setForcePasswordReset(!forcePasswordReset),
                }, {
                  label: 'Send Welcome Email',
                  checked: sendWelcomeEmail,
                  onChange: () => setSendWelcomeEmail(!sendWelcomeEmail),
                }, {
                  label: 'Send SMS Notification',
                  checked: sendSmsNotification,
                  onChange: () => setSendSmsNotification(!sendSmsNotification),
                }].map((option, idx) => (
                  <div key={idx}>
                    <label className="inline-flex items-center">
                      <input type="checkbox" checked={option.checked} onChange={option.onChange} className="form-checkbox text-[#6F0C15]" />
                      <span className="ml-2 text-sm text-[#6F0C15]">{option.label}</span>
                    </label>
                  </div>
                ))}

                <div className="mt-4 text-xs text-[#6F0C15]">
                  This action will be logged in the Audit Trail
                </div>
                <div className="flex justify-between gap-4 mt-6">
                  <button type="button" className="px-4 py-2 rounded-2xl border border-[#6F0C15] text-[#6F0C15] w-full" onClick={closeModal}>Cancel</button>
                  <button type="submit" className="px-4 py-2 rounded-2xl bg-[#6F0C15] text-white w-full">Add New User</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
