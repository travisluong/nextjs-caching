interface Data {
  name: string;
}

/**
 * simulate fetching from db
 */
export async function getDataFromDB(name: string): Promise<Data> {
  console.log(`fetching ${name} from db`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: name });
    }, 1000);
  });
}
