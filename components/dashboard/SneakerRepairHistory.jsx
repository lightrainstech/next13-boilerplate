export default () => (
  <div className="grid grid-flow-row gap-3">
    <p className="text-white text-lg">Repair History</p>
    <div className="grid grid-flow-row gap-3 max-h-[200px] overflow-scroll">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bg-[#1B1C21] bg-opacity-50 p-3 flex justify-between rounded-lg bordered">
          <div className="flex gap-3">
            <div className="h-4 w-4 flex items-center justify-center rounded-full border border-white p-2">
              <i className="ri ri-tools-line text-xs" />
            </div>
            <p className="text-white">
              Repaired on: <span className="font-medium">Dec 25, 2022</span>
            </p>
          </div>
          <div>
            <p className="text-white">
              Repaired cost: <span className="font-medium">12.3 USD</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)
