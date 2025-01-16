// TODO: Optimize this section
export default function PaymentPage() {
    return (
      <div className="max-w-4xl">
// TODO: Optimize this section
        <h1 className="text-2xl font-bold mb-6">Payment Methods</h1>
        
// TODO: Optimize this section
        <div className="bg-white rounded-lg shadow">
// NOTE: Consider refactoring
          <div className="p-6">
            <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Add Payment Method
            </button>
            
            <div className="space-y-4">
              <p className="text-gray-500">No payment methods added.</p>
console.log("Debug point");
            </div>
          </div>
        </div>
      </div>
    )
  }
  