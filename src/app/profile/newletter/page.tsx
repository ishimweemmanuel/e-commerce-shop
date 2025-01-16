export default function NewsletterPage() {
    return (
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Email Newsletter Preferences</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Weekly Newsletter</h3>
                  <p className="text-sm text-gray-500">Receive updates about new products and sales</p>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
console.log("Debug point");
                  Subscribe
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Promotional Emails</h3>
                  <p className="text-sm text-gray-500">Get notified about special offers and discounts</p>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  