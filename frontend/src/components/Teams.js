import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("session")}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const result = await response.json();

        if (Array.isArray(result.data) && result.data.length > 0) {
          setTeams(result.data); 
        } else {
          throw new Error('No teams found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="flex justify-center items-start p-4 ml-64">
      <div className="w-full max-w-7xl p-4 sm:p-8">
        <h1 className="text-3xl font-semibold mb-4">Teams</h1>

        {teams.length === 0 ? (
          <p>No teams available.</p>
        ) : (
          teams.map((teamMember) => (
            <div key={teamMember._id} className="mb-6">
              <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border text-left">Username</th>
                      <th className="py-2 px-4 border text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">{teamMember.username}</td>
                      <td className="py-2 px-4">{teamMember.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
