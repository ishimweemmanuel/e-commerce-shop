export default function OrdersPage() {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Order history</h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">2 orders</span>
            <span className="text-gray-600">placed in:</span>
            <select className="border rounded-md px-2 py-1">
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
        </div>
  
        <div className="mb-6">
          <div className="flex space-x-6 border-b">
            <button className="px-4 py-2 text-indigo-600 border-b-2 border-indigo-600">Orders</button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Open orders</button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Cancelled orders</button>
          </div>
        </div>
  
        {/* Order Item */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">Status</div>
                <div className="flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Order in progress</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Order №</div>
                <div className="mt-1">72813820</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Order date</div>
                <div className="mt-1">04/08/2024</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Total</div>
                <div className="mt-1">$229</div>
              </div>
            </div>
  
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Estimated delivery:</span>
                <span className="font-medium text-gray-900">Wednesday, Aug 7 2024</span>
              </div>
  
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>280 Suzanne Throughway, New York, Breannabury, OR 45801, US</span>
              </div>
  
              <div className="mt-6">
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Order placed</span>
                    <span className="font-medium text-indigo-600">Preparing order</span>
                    <span className="font-medium text-gray-400">Shipped</span>
                    <span className="font-medium text-gray-400">Delivered</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-full w-1/2 bg-indigo-600 rounded"></div>
                  </div>
                </div>
              </div>
  
              <div className="mt-6 flex items-start gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/images/nike-blazer.jpg" 
                    alt="Nike SB Zoom Blazer Mid Electric" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Nike SB Zoom Blazer Mid Electric</h3>
                  <p className="text-gray-600 mt-1">$150</p>
                  <div className="mt-2 flex gap-8">
                    <div>
                      <span className="text-sm text-gray-600">Color</span>
                      <p className="mt-1">White</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Size</span>
                      <p className="mt-1">US 10</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Quantity</span>
                      <p className="mt-1">1</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Buy it again
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Write a product review
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                Order details
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  