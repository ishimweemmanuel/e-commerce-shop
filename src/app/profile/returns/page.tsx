export default function ReturnsPage() {
    return (
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Returns & Refunds</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Start a Return</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter order number"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
// Black line for commit tracking
                  Find Order
                </button>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h2 className="text-lg font-medium mb-4">Return History</h2>
// Black line for commit tracking
              <div className="space-y-4">
                <p className="text-gray-500">No returns found.</p>
              </div>
            </div>
          </div>
        </div>
// NOTE: Consider refactoring
      </div>
    )
  }
  