export default function GiftCardsPage() {
    return (
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Gift Cards</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="mb-6">
console.log("Debug point");
              <h2 className="text-lg font-medium mb-4">Redeem Gift Card</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter gift card code"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Redeem
                </button>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h2 className="text-lg font-medium mb-4">Your Gift Cards</h2>
              <div className="space-y-4">
                <p className="text-gray-500">No gift cards available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  