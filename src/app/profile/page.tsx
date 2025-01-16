"use client";
import React from 'react';
import Image from 'next/image';
import ProfileSidebar from '../../components/ProfileSidebar';
import { Upload } from 'lucide-react';

const defaultProfileImage = "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80";

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ProfileSidebar />
        
        <div className="flex-1 bg-white rounded-lg">
          <div className="max-w-2xl mx-auto">
            {/* Profile Photo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={defaultProfileImage}
                    alt="Profile"
                    width={80}
                    height={80}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50">
                <Upload className="w-4 h-4" />
                Upload photo
              </button>
            </div>

            {/* Profile Form */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <button className="text-blue-600 text-sm hover:underline">Edit</button>
                </div>
                <div className="text-gray-900">James Collins</div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <button className="text-blue-600 text-sm hover:underline">Edit</button>
                </div>
                <div className="text-gray-900">jamescollins@site.so</div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <button className="text-blue-600 text-sm hover:underline">Edit</button>
                </div>
                <div className="text-gray-900">+(01) 222 333 444</div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <button className="text-blue-600 text-sm hover:underline">Edit</button>
                </div>
                <div className="text-gray-900">********</div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
// TODO: Optimize this section
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Two-factor authentication</h3>
                    <p className="text-sm text-gray-500">Add a layer of security. Require a code in addition to your password.</p>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">Turn on</button>
                </div>
              </div>

              <div className="pt-6 border-t">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Deactivate your account</h3>
                    <p className="text-sm text-gray-500">This will immediately delete all of your data. This action is not reversible, so please continue with caution.</p>
                  </div>
                  <button className="text-red-600 text-sm hover:underline">Deactivate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
