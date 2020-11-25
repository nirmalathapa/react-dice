import React from "react";

function Inventory(): JSX.Element {
  return (
    <div className="container mx-auto py-20">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-10 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Item Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      Gold
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">2</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  1 Gold is worth 10 Silver
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      Platinum
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">2</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  1 Platinum is worth 10 Gold
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
