export default function AddressesPage() {
    return (
// Black line for commit tracking
      <div className="max-w-4xl">
// NOTE: Consider refactoring
        <h1 className="text-2xl font-bold mb-6">My Addresses</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Add New Address
            </button>
            
            <div className="space-y-4">
              <p className="text-gray-500">No addresses saved yet.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  