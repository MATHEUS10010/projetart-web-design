{/* Modal */}
<Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
  <DialogContent className="max-w-4xl overflow-auto">
    {selectedProject && (
      <>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {projects.find(p => p.id === selectedProject)?.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <img
            src={projects.find(p => p.id === selectedProject)?.image}
            alt={projects.find(p => p.id === selectedProject)?.title}
            className="w-full h-auto object-contain mx-auto rounded-lg"
            style={{ maxHeight: '75vh' }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-semibold text-neutral-700">Local:</span>
              <p className="text-neutral-600">{projects.find(p => p.id === selectedProject)?.location}</p>
            </div>
            <div>
              <span className="font-semibold text-neutral-700">Área:</span>
              <p className="text-neutral-600">{projects.find(p => p.id === selectedProject)?.area}</p>
            </div>
            <div>
              <span className="font-semibold text-neutral-700">Tipo:</span>
              <p className="text-neutral-600">{projects.find(p => p.id === selectedProject)?.type}</p>
            </div>
          </div>

          <p className="text-neutral-700 leading-relaxed">
            {projects.find(p => p.id === selectedProject)?.description}
          </p>
        </div>
      </>
    )}
  </DialogContent>
</Dialog>
