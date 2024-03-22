import { CardContent, Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  return (
    <div className="grid gap-12 lg:gap-20">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <div className="rounded-full overflow-hidden border-4 border-white">
          <img
            alt="Picture of the author"
            className="rounded-full object-cover"
            height="150"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/150",
              objectFit: "cover",
            }}
            width="150"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Jenny Wilson</h1>
          <p className="text-sm font-medium tracking-wide/0.25">FullStack Developer</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-lg/relaxed text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Passionate about creating web experiences that are both beautiful and functional. I love diving into new
          technologies and frameworks to bring ideas to life.
        </p>
      </div>
      <div className="grid max-w-sm gap-4 mx-auto items-center justify-center lg:grid-cols-4 lg:max-w-none lg:gap-8 xl:gap-10">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2">
            <img
              alt="Next.js"
              height="64"
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
          </div>
          <Card>
            <CardContent className="flex items-center justify-center p-4">
              <img
                alt="Next.js"
                className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                height="32"
                src="/placeholder.svg"
                width="32"
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2">
            <img
              alt="Nest.js"
              height="64"
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
          </div>
          <Card>
            <CardContent className="flex items-center justify-center p-4">
              <img
                alt="Nest.js"
                className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                height="32"
                src="/placeholder.svg"
                width="32"
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2">
            <img
              alt="React"
              height="64"
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
          </div>
          <Card>
            <CardContent className="flex items-center justify-center p-4">
              <img
                alt="React"
                className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                height="32"
                src="/placeholder.svg"
                width="32"
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2">
            <img
              alt="Node.js"
              height="64"
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
          </div>
          <Card>
            <CardContent className="flex items-center justify-center p-4">
              <img
                alt="Node.js"
                className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                height="32"
                src="/placeholder.svg"
                width="32"
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mx-auto max-w-3xl grid gap-8">
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4 text-center">
                <img
                  alt="Project 1"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="400"
                />
                <p className="text-2xl font-bold">Project One</p>
                <p className="text-sm/relaxed mx-auto max-w-[600px]">
                  This is a description of the first project. It's a very interesting project that demonstrates my
                  skills.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4 text-center">
                <img
                  alt="Project 2"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="400"
                />
                <p className="text-2xl font-bold">Project Two</p>
                <p className="text-sm/relaxed mx-auto max-w-[600px]">
                  This is a description of the second project. It's also a very interesting project that demonstrates my
                  skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <img
                  alt="Project 1"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Frontend Projects</h3>
                  <p className="text-sm text-gray-500">Beautiful user interfaces</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <Button size="sm">View Projects</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <img
                  alt="Project 2"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Backend Projects</h3>
                  <p className="text-sm text-gray-500">Robust server-side applications</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <Button size="sm">View Projects</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <img
                  alt="Project 3"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Extra Projects</h3>
                  <p className="text-sm text-gray-500">Miscellaneous projects and experiments</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <Button size="sm">View Projects</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
