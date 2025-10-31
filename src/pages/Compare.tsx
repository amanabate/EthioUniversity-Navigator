import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RefreshCw } from "lucide-react";
import { universities, University, getTotalPrograms } from "@/data/universities";

const Compare = () => {
  const [uni1, setUni1] = useState<University | null>(null);
  const [uni2, setUni2] = useState<University | null>(null);

  const handleReset = () => {
    setUni1(null);
    setUni2(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compare Universities
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select two universities to compare their programs, facilities, and information side by side
            </p>
          </div>

          {/* University Selection */}
          <Card className="p-8 mb-8 max-w-4xl mx-auto shadow-[var(--shadow-card)]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold mb-2 block">First University</label>
                <Select
                  value={uni1?.id || ""}
                  onValueChange={(value) => {
                    const selected = universities.find((u) => u.id === value);
                    setUni1(selected || null);
                  }}
                >
                  <SelectTrigger className="h-12 rounded-full border-2">
                    <SelectValue placeholder="Select a university" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map((uni) => (
                      <SelectItem key={uni.id} value={uni.id} disabled={uni.id === uni2?.id}>
                        {uni.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Second University</label>
                <Select
                  value={uni2?.id || ""}
                  onValueChange={(value) => {
                    const selected = universities.find((u) => u.id === value);
                    setUni2(selected || null);
                  }}
                >
                  <SelectTrigger className="h-12 rounded-full border-2">
                    <SelectValue placeholder="Select a university" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map((uni) => (
                      <SelectItem key={uni.id} value={uni.id} disabled={uni.id === uni1?.id}>
                        {uni.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {(uni1 || uni2) && (
              <div className="mt-6 flex justify-center">
                <Button variant="outline" onClick={handleReset}>
                  <RefreshCw className="h-4 w-4" />
                  Reset Comparison
                </Button>
              </div>
            )}
          </Card>

          {/* Comparison Table */}
          {uni1 && uni2 && (
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <Card className="p-6 shadow-[var(--shadow-card)]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Category</TableHead>
                      <TableHead className="font-bold text-primary">{uni1.name}</TableHead>
                      <TableHead className="font-bold text-primary">{uni2.name}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Location</TableCell>
                      <TableCell>{uni1.location}, {uni1.region}</TableCell>
                      <TableCell>{uni2.location}, {uni2.region}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Type</TableCell>
                      <TableCell>{uni1.type}</TableCell>
                      <TableCell>{uni2.type}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Year Established</TableCell>
                      <TableCell>{uni1.yearEstablished}</TableCell>
                      <TableCell>{uni2.yearEstablished}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Total Programs</TableCell>
                      <TableCell>{getTotalPrograms(uni1)}</TableCell>
                      <TableCell>{getTotalPrograms(uni2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Number of Faculties</TableCell>
                      <TableCell>{uni1.faculties.length}</TableCell>
                      <TableCell>{uni2.faculties.length}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Faculties</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside space-y-1">
                          {uni1.faculties.map((f, i) => (
                            <li key={i} className="text-sm">{f.name}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside space-y-1">
                          {uni2.faculties.map((f, i) => (
                            <li key={i} className="text-sm">{f.name}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Campus Facilities</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {uni1.facilities.map((f, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                              {f}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {uni2.facilities.map((f, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                              {f}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">President</TableCell>
                      <TableCell>{uni1.president.name}</TableCell>
                      <TableCell>{uni2.president.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Contact</TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <div>{uni1.contact.phone}</div>
                          <div className="text-muted-foreground">{uni1.contact.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <div>{uni2.contact.phone}</div>
                          <div className="text-muted-foreground">{uni2.contact.email}</div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Website</TableCell>
                      <TableCell>
                        <a
                          href={uni1.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Visit Website
                        </a>
                      </TableCell>
                      <TableCell>
                        <a
                          href={uni2.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Visit Website
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {!uni1 && !uni2 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Select two universities above to begin comparing
              </p>
            </div>
          )}
        </div>
      </div>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 EthioUniversity Guide. Empowering students with information.</p>
        </div>
      </footer>
    </div>
  );
};

export default Compare;
