import Cards from "@/components/Cards";
import { dataComponentsTailwind } from "@/data/(library)/(ui)/componentsTailwind";

const VanillaComponentsTailwind = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataComponentsTailwind.map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            icon={item.icon}
            darkImage={item.darkImage}
            lightImage={item.lightImage}
            suggested={item.suggested}
            tags={item.tags}
          />
        ))}
      </div>
    </>
  );
};

export default VanillaComponentsTailwind;
