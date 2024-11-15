import React, { useState } from 'react';

const NLPTool = () => {
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);

  // Expanded list of diseases with corresponding pharmaceutical treatments
  const diseaseData = {
    malaria: ['Artemisinin-based combination therapy (ACT)', 'Chloroquine', 'Quinine'],
    pneumonia: ['Amoxicillin', 'Ceftriaxone', 'Azithromycin', 'Levofloxacin'],
    nutrition: ['Multivitamins', 'Iron supplements', 'Folic acid', 'Vitamin D'],
    diabetes: ['Insulin', 'Metformin', 'Sulfonylureas', 'GLP-1 agonists'],
    hypertension: ['ACE inhibitors (Lisinopril)', 'Beta-blockers (Atenolol)', 'Calcium channel blockers'],
    asthma: ['Inhaled corticosteroids (Fluticasone)', 'Beta-agonists (Salbutamol)', 'Leukotriene receptor antagonists'],
    cancer: ['Chemotherapy', 'Radiation therapy', 'Immunotherapy', 'Surgery'],
    tuberculosis: ['Isoniazid', 'Rifampicin', 'Pyrazinamide', 'Ethambutol'],
    stroke: ['Tissue Plasminogen Activator (tPA)', 'Antiplatelet agents (Aspirin)', 'Anticoagulants'],
    covid19: ['Remdesivir', 'Dexamethasone', 'Monoclonal antibodies'],
    influenza: ['Oseltamivir (Tamiflu)', 'Zanamivir', 'Paracetamol (for fever)'],
    hepatitis: ['Antiviral drugs (Tenofovir)', 'Interferon therapy'],
    arthritis: ['Methotrexate', 'NSAIDs (Ibuprofen)', 'Biologic agents (TNF inhibitors)'],
    chronic_obstructive_pulmonary_disease: ['Bronchodilators (Albuterol)', 'Inhaled corticosteroids', 'Oxygen therapy'],
    anemia: ['Iron supplements', 'Erythropoiesis-stimulating agents', 'Folic acid'],
    depression: ['Selective serotonin reuptake inhibitors (SSRIs)', 'Cognitive-behavioral therapy'],
    dementia: ['Donepezil', 'Memantine', 'Cholinesterase inhibitors'],
    obesity: ['Orlistat', 'Metformin', 'Bariatric surgery'],
    HIV_AIDS: ['Antiretroviral therapy (ART)', 'Tenofovir', 'Lamivudine', 'Efavirenz'],
    gastroenteritis: ['Oral rehydration therapy', 'Antiemetics (Ondansetron)', 'Antibiotics if bacterial'],
    renal_failure: ['Diuretics (Furosemide)', 'Erythropoietin', 'Dialysis'],
    sepsis: ['Broad-spectrum antibiotics (Meropenem)', 'Vasopressors (Norepinephrine)', 'Steroids'],
    cardiovascular_disease: ['Statins', 'Beta-blockers', 'Aspirin', 'ACE inhibitors'],

    // Pediatric diseases and prescriptions
    bronchiolitis: ['Supportive care (Oxygen, IV fluids)', 'Nebulized saline', 'Ribavirin (if severe)'],
    croup: ['Corticosteroids (Dexamethasone)', 'Racemic epinephrine (nebulized)'],
    whooping_cough: ['Erythromycin', 'Azithromycin'],
    chickenpox: ['Acyclovir (in severe cases)', 'Antihistamines', 'Calamine lotion'],
    measles: ['Vitamin A', 'Antibiotics (if secondary bacterial infections)'],
    mumps: ['Supportive care', 'Pain relief (Paracetamol)', 'Fluids'],
    rubella: ['Supportive care', 'Antipyretics', 'Hydration'],
    rotavirus: ['Oral rehydration therapy', 'Zinc supplements'],
    scabies: ['Permethrin cream', 'Ivermectin'],
    impetigo: ['Topical antibiotics (Mupirocin)', 'Oral antibiotics (Cephalexin)'],
    pediatric_cancer: ['Chemotherapy', 'Radiotherapy', 'Surgical resection'],
    sickle_cell_disease: ['Hydroxyurea', 'Pain management', 'Blood transfusions'],
    failure_to_thrive: ['Nutritional support', 'Feeding therapy', 'Vitamin supplements'],
    otitis_media: ['Amoxicillin', 'Antihistamines', 'Pain relief'],
    lead_poisoning: ['Chelation therapy (EDTA, DMSA)', 'Supportive care'],
    cystic_fibrosis: ['Pancreatic enzymes', 'Bronchodilators', 'Nebulized antibiotics'],
    herpes_simplex: ['Acyclovir', 'Valacyclovir'],
    hydrocephalus: ['Shunt surgery', 'Steroids'],
    neonatal_sepsis: ['Antibiotics (Ampicillin + Gentamicin)', 'Supportive care'],
  };

  const processText = () => {
    // Extract diseases mentioned in the input text
    const foundKeywords = Object.keys(diseaseData).filter((disease) =>
      text.toLowerCase().includes(disease)
    );

    setKeywords(foundKeywords);

    // Map the diseases to their corresponding prescriptions
    const foundPrescriptions = foundKeywords.map((keyword) => ({
      disease: keyword,
      prescriptions: diseaseData[keyword],
    }));

    setPrescriptions(foundPrescriptions);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">NLP Health Text Analyzer</h3>
      <p className="text-gray-700 mb-4">Enter a health report to analyze the key diseases or health conditions mentioned and their treatments.</p>

      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter health report text..."
          className="p-2 border border-gray-300 rounded w-full h-32"
        ></textarea>
      </div>

      <button
        onClick={processText}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition mt-4"
      >
        Process Text
      </button>

      {keywords.length > 0 && (
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <h3 className="text-xl">Diseases or Conditions Detected</h3>
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>
                <strong>{keyword.charAt(0).toUpperCase() + keyword.slice(1)}</strong>:
                <span className="text-gray-600"></span>
                <br />
                <span className="font-semibold text-blue-700">Proposed Prescriptions</span>
                <ul className="mt-2">
                  {prescriptions.find(p => p.disease === keyword)?.prescriptions.map((med, idx) => (
                    <li key={idx}>{med}</li>
                  ))}
                </ul>
              </li>


            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NLPTool;
